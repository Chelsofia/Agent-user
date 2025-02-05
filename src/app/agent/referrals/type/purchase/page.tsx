"use client";

import { referralsData } from "../../data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VscCheck, VscFilter } from "react-icons/vsc";
import SearchFilter from "@/app/components/searchfilter/SearchFilter";
import { TbBriefcase2 } from "react-icons/tb";
import { BiCheck } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";
import GoBackButton from "@/app/components/sidebar/GoBackButton";
import Table from "@/app/components/tableSection";
import man from "../../../../../../public/assets/images/agent.png";
import { FaUserCheck } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";

export default function Page() {
  const [filter, setFilter] = useState<
    "All" | "Registration" | "Investment" | "Purchase"
  >("All");

  // Set referral to the first item in the data or null if empty
  const referral = referralsData.length > 0 ? referralsData[0] : null;

  if (!referral) {
    return <div>Referral not found</div>;
  }

  const headers = [
    "Property Name",
    "unit",
    "Payment Type",
    "Payment Duration",
    "Months Paid",
    "Months Left",
    "Date Onboarded",
    "Status",
  ];

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [progress, setProgress] = useState<string>("50");

const handleFilterChange = (
  newFilter: "All" | "Registration" | "Investment" | "Purchase"
) => {
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

   const counts = {
     All: referralsData.length,
     Registration: referralsData.filter((item) => item.type === "Registration")
       .length,
     Investment: referralsData.filter((item) => item.type === "Investment")
       .length,
     Purchase: referralsData.filter((item) => item.type === "Purchase").length,
   };

  const filteredData = referralsData.filter(
    (ref) =>
      ref.name === referral.name && (filter === "All" || ref.type === filter)
  );

  const rows = filteredData.map((ref) => [
    ref.event,
    ref.unit,
    ref.purchaseType,
    ref.paymentDuration,
    ref.monthsPaid,
    ref.monthsLeft,
    ref.date,
    <span
      key={ref.id}
      className={`px-2 py-1 text-xs font-semibold rounded-full ${
        ref.type === "Registration"
          ? "bg-green-100 text-green-600"
          : ref.type === "Investment"
          ? "bg-blue-100 text-blue-600"
          : "bg-yellow-100 text-yellow-600"
      }`}
    >
      {ref.status}
    </span>,
    // <Link key={ref.id} href={`/agent/referrals/${ref.id}/details`}>
    //   View Details
    // </Link>,
  ]);

  return (
    <div className="px-4">
      <GoBackButton pageTitle="Referrals" />

      <div className="flex items-start gap-3 p-3">
        <div className="relative">
          <Image
            src={man}
            width={40}
            height={40}
            alt="image"
            className="rounded-full border-2 border-gray-300"
          />
          <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
            <VscCheck size={10} className="text-white" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-semibold">{referral.name}</h1>
          <h5 className="text-sm text-gray-600">{referral.email}</h5>
        </div>
      </div>

      {/* Overview Section */}
      <div className="relative inline-block ml-12 mt-4">
        <span className="text-xs font-semibold text-gray-700">Overview</span>
        <hr className="absolute bottom-0 left-0 w-16 border-black" />
      </div>

      {/* Investment and Commission Cards */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center">
        <div className="bg-white p-4 rounded-md border w-full md:w-[45%] flex flex-col justify-between h-[150px]">
          <p className="text-xs text-[#667185]">Total Investments</p>
          <h2 className="text-xl text-[#667185] font-bold mt-auto">₦100.00</h2>
        </div>
        <div className="bg-white p-4 rounded-md border w-full md:w-[45%] flex flex-col justify-between h-[150px]">
          <p className="text-xs text-[#667185]">Total Commission Earned</p>
          <h2 className="text-xl text-[#667185] font-bold mt-auto">
            ₦3,000,000.00
          </h2>
        </div>
      </div>

      <div>
        <div className="my-4 flex justify-between items-center gap-">
          <div className="flex flex-wrap gap-2 md:gap-6 md:flex-nowrap">
            <SearchFilter
              placeholder="Search customers by name or user ID"
              className="lg:!w-[290px] !w-full"
            />
            <button
              onClick={() => handleFilterChange("All")}
              className={`flex items-center px-3 py-2 text-sm rounded border ${
                filter === "All"
                  ? "bg-[#ffece5] text-black"
                  : "bg-[#fff] text-gray-700"
              }`}
            >
              {filter === "All" ? (
                <TbBriefcase2 className="mr-3 text-[#ff8c00]" />
              ) : (
                <TbBriefcase2 className="mr-3" />
              )}
              Total Assets
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
                <HiOutlineRefresh className="mr-3 text-[#ff8c00]" />
              ) : (
                <HiOutlineRefresh className="mr-3" />
              )}
              Active Assets
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
                <BiCheck className="mr-3 text-[#ff8c00]" />
              ) : (
                <BiCheck className="mr-3" />
              )}
              Completed Assets
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
          </div>

          {/* Move Filter Button to the Right */}
          <button
            onClick={() => handleFilterChange("All")}
            className={`flex items-center text-sm px-3 py-2 rounded border ${
              filter === "All"
                ? "bg-white text-gray-700"
                : "bg-white text-gray-700"
            } hover:bg-gray-300 ml-auto`}
          >
            <VscFilter className="mr-2" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <Table headers={headers} rows={rows} />
    </div>
  );
}
