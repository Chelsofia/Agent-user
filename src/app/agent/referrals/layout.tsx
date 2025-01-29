"use client";
import { useState } from "react";
import AppWrapper from "@/app/components/wrapper";
import SearchBar from "../../components/searchBar";

const ReferralsLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    console.log("Search Query:", value); // Debugging
  };

  return (
    <div>
      <AppWrapper title="Refferals">
        <div className="flex justify-end mb-4">
         
        </div>
        {children}
      </AppWrapper>
    </div>
  );
};

export default ReferralsLayout;
