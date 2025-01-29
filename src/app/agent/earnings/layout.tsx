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
      <div className="flex justify-between items-center">
        <div></div>
        {/* Adjusting the flex container to stay aligned */}
        <div className="flex space-x-4">
          <SearchFilter
            className="!w-[350px] mt-2"
            placeholder="Search transactions by transaction ID"
          />
          <WithdrawalFilter />
        </div>
      </div>
      <div>{children}</div>
    </AppWrapper>
  );
};

export default EarningLayout;
