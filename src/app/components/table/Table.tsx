"use client";
import { CSSProperties, FC, JSX, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import  Pagination  from "@/app/components/pagination/Pagination";
import React from "react";
import { useSerialNumber } from "@/app/components/table/useSerialNumber";
import CircleLoader from "react-spinners/ClipLoader";

interface Header {
  title: ReactNode;
  styles?: CSSProperties;
  className?: string;
}

interface PaginationMeta {
  totalItems: number;
  currentPage: number;
  perPage: number;
}

interface TableProps {
  headers: Header[];
  paginationMeta?: PaginationMeta;
  children?: ReactNode;
  onPageChange?: (page: number) => void;
  isFetching?: boolean;
  showSerialNumber?: boolean;
  showFooter?: boolean;
}

const Table: FC<TableProps> = ({
  headers,
  children,
  paginationMeta,
  onPageChange,
  isFetching,
  showSerialNumber = true,
  showFooter = true,
}) => {
  function getFooterText() {
    if (paginationMeta) {
      const start =
        (paginationMeta.currentPage - 1) * paginationMeta.perPage + 1;
      const end = Math.min(
        paginationMeta.currentPage * paginationMeta.perPage,
        paginationMeta.totalItems
      );
      return `Page ${paginationMeta.currentPage} of ${paginationMeta.totalItems}`;
    }
    return null;
  }

  const initialSerialNumber = useSerialNumber(
    paginationMeta?.currentPage || 1,
    paginationMeta?.perPage || 0
  );

  return (
    <div className="mt-8">
      <div className="relative">
        <div className="-mx-4 sm:-mx-0 border rounded-lg overflow-hidden relative overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#F0F2F5]">
              <tr>
              {showSerialNumber && (
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 bg-gray-50 uppercase">
                    S/N
                  </th>
                )}
                {headers.map(({ title, styles, className }, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={twMerge(
                      "px-2 py-3.5 uppercase text-left text-[12px] font-[700] text-gray-800 bg-gray-50",
                      className
                    )}
                    style={styles}
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                  return (
                    <tr>
                      {showSerialNumber && (
                        <td className="px-3 py-4 text-sm text-gray-500 ">
                          {initialSerialNumber + index}
                        </td>
                      )}
                      {child}
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {showFooter && (
            <div className="flex items-center justify-between bg-[#ff8c0027]  border-t px-3 py-5">
              <div className="text-[14px] text-black font-[700] flex-1">
                {getFooterText()}
              </div>
              <div>
                {paginationMeta ? (
                  <Pagination
                    totalItems={paginationMeta.totalItems}
                    currentPage={paginationMeta.currentPage}
                    handlePageClick={(page) => onPageChange?.(page)}
                    itemsPerPage={paginationMeta.perPage}
                  />
                ) : null}
              </div>
            </div>
          )}
        </div>
        {isFetching && (
          <div className="absolute h-full w-full bg-white/60 top-0 flex justify-center items-start">
            <div className="mt-20">
              <CircleLoader size={30} color="#1A0D78" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

type TableCellProps = JSX.IntrinsicElements["td"] & {
  children: ReactNode;
  desktopOnly?: boolean;
};

const TableCell: FC<TableCellProps> = ({ children, className }) => {
  return (
    <td
      className={twMerge(
        "px-3 py-4 text-[14px] text-gray-800 relative",
        className
      )}
    >
      {children}
    </td>
  );
};

const TableNS = Object.assign(Table, { Cell: TableCell });
export { TableNS as Table };
