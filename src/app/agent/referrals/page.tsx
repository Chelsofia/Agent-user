"use client";
import Link from "next/link";
import { useState } from "react";
import {  FaUserCheck } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { TbUserCircle } from "react-icons/tb";
import { VscFilter } from "react-icons/vsc";
import { Badge } from "@/app/components/badge";
import Table from "../../components/tableSection";
import { referralsData } from "./data";

const Referrals = () => {
  const [filter, setFilter] = useState<string>("Registration");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [progress, setProgress] = useState<string>("50");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    if (newFilter === "All") {
      setProgress("30");
    } else if (newFilter === "Registration") {
      setProgress("50");
    } else if (newFilter === "Purchase") {
      setProgress("70");
    } else {
      setProgress("80");
    }
  };

 const mapStatusToBadgeStatus = (type: string) => {
   switch (type.toLowerCase()) {
     case "successful":
       return "success";
     case "failed":
       return "failed";
     case "pending":
       return "pending";
     default:
       return undefined;
   }
 };
  const filteredData = referralsData
    .filter(
      (item) =>
        filter === "All" || item.type.toLowerCase() === filter.toLowerCase()
    )
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.id.toLowerCase().includes(searchQuery));

const rows = filteredData.map((item, index) => [
  <Link
    key={index}
    href={`/referrals/type/${item.type.toLowerCase()}`}
    className="hover:underline"
  >
    {item.name}
  </Link>,

  <Badge key={`type-${index}`} status={mapStatusToBadgeStatus(item.type)}>
    {item.type}
  </Badge>,

  item.date,

  <Link
    key={`view-${index}`}
    href={`/agent/referrals/type/${item.type.toLowerCase()}`}
  >
    <button className="text-secondary font-bold hover:underline">
      View More
    </button>
  </Link>,
]);

 
  const counts = {
    
    All: referralsData.length,
    Registration: referralsData.filter((item) => item.type === "Registration")
      .length,
    Investment: referralsData.filter((item) => item.type === "Investment")
      .length,
    Purchase: referralsData.filter((item) => item.type === "Purchase").length,
  };

  return (
    <div className=" px-4 ">

      
      <div className="my-7 flex justify-between items-center gap-2">
        <div className="flex flex-wrap gap-4 md:gap-6 md:flex-nowrap">
          <button
            onClick={() => handleFilterChange("All")}
            className={`flex items-center px-3 py-2 text-sm rounded border ${
              filter === "All"
                ? "bg-[#ffece5] text-black"
                : "bg-[#fff] text-gray-700"
            }`}
          >
            {filter === "All" ? (
              <FaUserCheck className="mr-3 text-[#ff8c00]" />
            ) : (
              <FaUserCheck className="mr-3" />
            )}
            All Referrals
            <div
              className={`ml-3 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
                filter === "All"
                  ? "bg-[#ff8c00] text-white"
                  : "bg-[#E4E7EC] text-[#344054]"
              }`}
            >
              {counts["All"]}
            </div>
          </button>

          <button
            onClick={() => handleFilterChange("Registration")}
            className={`flex items-center px-3 py-2 text-sm rounded border ${
              filter === "Registration"
                ? "bg-[#ffece5] text-black"
                : "bg-[#fff] text-gray-700"
            }`}
          >
            {filter === "Registration" ? (
              <FaUserCheck className="mr-3 text-[#ff8c00]" />
            ) : (
              <FaUserCheck className="mr-3" />
            )}
            Registration
            <div
              className={`ml-3 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
                filter === "Registration"
                  ? "bg-[#ff8c00] text-white"
                  : "bg-[#E4E7EC] text-[#344054]"
              }`}
            >
              {counts["Registration"]}
            </div>
          </button>

          <button
            onClick={() => handleFilterChange("Investment")}
            className={`flex items-center px-3 py-2 text-sm rounded border ${
              filter === "Investment"
                ? "bg-[#ffece5] text-black"
                : "bg-[#fff] text-gray-700"
            }`}
          >
            {filter === "Investment" ? (
              <HiOutlineUser className="mr-3 text-[#ff8c00]" />
            ) : (
              <HiOutlineUser className="mr-3" />
            )}
            Investment
            <div
              className={`ml-3 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
                filter === "Investment"
                  ? "bg-[#ff8c00] text-white"
                  : "bg-[#E4E7EC] text-[#344054]"
              }`}
            >
              {counts["Investment"]}
            </div>
          </button>

          <button
            onClick={() => handleFilterChange("Purchase")}
            className={`flex items-center px-3 py-2 text-sm rounded border ${
              filter === "Purchase"
                ? "bg-[#ffece5] text-black"
                : "bg-[#fff] text-gray-700"
            }`}
          >
            {filter === "Purchase" ? (
              <HiOutlineUser className="mr-3 text-[#ff8c00]" />
            ) : (
              <HiOutlineUser className="mr-3" />
            )}
            Purchase
            <div
              className={`ml-3 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
                filter === "Purchase"
                  ? "bg-[#ff8c00] text-white"
                  : "bg-[#E4E7EC] text-[#344054]"
              }`}
            >
              {counts["Purchase"]}
            </div>
          </button>
        </div>

        <button
          onClick={() => handleFilterChange("Filter")}
          className={`flex items-center text-sm px-3 py-2 rounded border ${
            filter === ""
              ? "bg-yellow-500 text-white"
              : "bg-white text-gray-700"
          } hover:bg-gray-300 ml-auto`}
        >
          <VscFilter className="mr-2" />
          <span>Filter</span>
        </button>
      </div>

      <Table
        title={filter.toLowerCase()}
        headers={["Full name", "Commision Type", "Date Onboarded", "Actions"]}
        rows={rows}
      />
    </div>
  );
};

export default Referrals;
