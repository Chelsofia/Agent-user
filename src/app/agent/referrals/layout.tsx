"use client";

import { useState } from "react";
import AppWrapper from "@/app/components/wrapper";
import SearchBar from "@/app/components/searchBar";
import SearchFilter from "@/app/components/searchfilter/SearchFilter";

const ReferralsLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    console.log("Search Query:", value); // Debugging
  };

  return (
    <div>
      <AppWrapper
        title="Referrals"
        headerChildren={
          <SearchFilter
            className="lg:!w-[372px] !w-full"
            placeholder="Search customers by name or user ID"
          />
        }
      >
        <div className="flex justify-end mb-4"></div>
        {children}
      </AppWrapper>
    </div>
  );
};

export default ReferralsLayout;
