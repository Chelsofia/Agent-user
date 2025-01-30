"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import AppWrapper from "@/app/components/wrapper";
import { usePathname } from "next/navigation";
import { WithdrawalFilter } from "./filter/filter";
import SearchFilter from "@/app/components/searchfilter/SearchFilter";

interface EarningLayoutProps {
  children: ReactNode;
}

const EarningLayout: React.FC<EarningLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const navigation = [
    { title: "Individual earning", href: "/agent/earnings" },
    { title: "Total earning", href: "/agent/earning/total" },
    { title: "Past withdrawn earning", href: "/agent/earning/past-withdrawn" },
  ];

  return (
    <AppWrapper title="Withdrawals">
      <div className="flex justify-between items-center flex-col sm:flex-row mt-4 sm:space-x-4">
        <div></div>
        {/* Adjusted flex container to column layout on small screens */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto mt-4 sm:mt-0">
          <SearchFilter
            className="!w-full sm:w-[350px]"
            placeholder="Search transactions by transaction ID"
          />
          <WithdrawalFilter className="mt-2 sm:mt-0" />
        </div>
      </div>
      <div>{children}</div>
    </AppWrapper>
  );
};

export default EarningLayout;
