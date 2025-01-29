import ReactPaginate from "react-paginate";
import "./Pagination.css";
import { JSX } from "react";

interface PaginationProps {
  itemsPerPage?: number;
  totalItems: number;
  handlePageClick: (selectedPage: number) => void;
  currentPage: number;
}

const PER_PAGE = 5;

export default function Pagination({
  itemsPerPage = PER_PAGE,
  totalItems,
  handlePageClick,
  currentPage,
}: PaginationProps): JSX.Element | null {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return totalItems > itemsPerPage ? (
    <div className="pagination-wrapper">
      <div className="page-info text-sm mb-2">
        Page {currentPage} of {pageCount}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel={null} 
        onPageChange={({ selected }) => handlePageClick(selected + 1)}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        forcePage={currentPage - 1}
        previousLabel={null}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="pagination__item"
        previousClassName="pagination__item-previous"
        nextClassName="pagination__item-next"
        breakClassName="pagination__item"
        activeClassName="active"
      />
    </div>
  ) : null;
}
