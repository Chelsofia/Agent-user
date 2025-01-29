"use client";
import { referralsData } from "../data";
import { useState, useEffect } from "react";
import Link from "next/link";
import man from "../../../../../public/assets/images/agent.png";
import Image from "next/image";
import { VscCheck } from "react-icons/vsc";
import { TbBriefcase2 } from "react-icons/tb";
import SearchBar from "@/app/components/searchBar";
import GoBackButton from "@/app/components/sidebar/GoBackButton";
import { VscFilter } from "react-icons/vsc";
import { TbRefresh } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import Table from "@/app/components/tableSection";

interface ReferralPageProps {
  params: {
    id: string;
    subId: string;
    name: string;
    type: string;
    amount: string;
    unitsPurchased: string;
    date: string;
    event: string;
    email: string;
    image: string;
  };
}

export default function Page({ params }: ReferralPageProps) {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [unwrappedParams, setUnwrappedParams] = useState<
    ReferralPageProps["params"] | null
  >(null);
  const [filter, setFilter] = useState<string>("All"); 

  useEffect(() => {
    const fetchParams = async () => {
      const result = await params;
      setUnwrappedParams(result);
    };

    fetchParams();
  }, [params]);

  if (!unwrappedParams) return <div>Loading...</div>;

  const { id, subId, name } = unwrappedParams;

  const referral = referralsData.find((ref) => ref.id === id);

  if (!referral) {
    return <div>Referral not found</div>;
  }
  

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    console.log("Search Query:", value); // Debugging
  };

  const headers = ["Event", "Commission Type", "Event Date", "Actions"];

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
      {ref.type}
    </span>,
    ref.date,
    <Link
      key={ref.id}
      href={`${ref.id}/details/${ref.name}`}
    >
      <button className="text-secondary hover:underline">
        View Investment
      </button>
    </Link>,
  ]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="px-4 ">
      <GoBackButton />
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
      <div className="relative inline-block ml-4">
        <span className="text-xs font-semibold text-gray-700">Overview</span>
        <hr className="absolute bottom-0 left-0 w-16 border-black" />
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <div className="bg-white p-4 rounded-md border w-[50%] flex flex-col justify-between h-[150px]">
          <p className="text-xs text-[#667185]">Total investments</p>
          <h2 className="text-xl text-[#667185] font-bold mt-auto">
            ₦3,000,000.00
          </h2>
        </div>
        <div className="bg-white p-4 rounded-md border w-[50%] flex flex-col justify-between h-[150px]">
          <p className="text-xs text-[#667185]">Total Commission Earned</p>
          <h2 className="text-xl text-[#667185] font-bold mt-auto">
            ₦3,000,000.00
          </h2>
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <div className="px-1 flex justify-start">
          {" "}
          {/* Wrap the SearchBar with flex and justify-end */}
          <SearchBar
            onChange={handleSearchChange}
            placeholder="Search customers by name or user ID"
          />
        </div>
        <button
          onClick={() => handleFilterChange("All")}
          className={`flex items-center text-sm px-1 py-1 rounded border ${
            filter === "All"
              ? "bg-[#ffece5] text-black"
              : "bg-[#fff] text-gray-700"
          }`}
        >
          Total Assets
          <div
            className={`ml-4 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
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
          className={`flex items-center text-sm px-2 py-1 rounded border ${
            filter === "Registration"
              ? "bg-[#ffece5] text-black"
              : "bg-[#fff] text-gray-700"
          }`}
        >
          Active Assets
          <div
            className={`ml-4 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
              filter === "Registration"
                ? "bg-[#ff8c00] text-white"
                : "bg-[#E4E7EC] text-[#344054]"
            }`}
          >
            {counts["Registration"]}
          </div>
        </button>
        <button
          onClick={() => handleFilterChange("Purchase")}
          className={`flex items-center text-sm px-2 py-1 rounded border ${
            filter === "Purchase"
              ? "bg-[#ffece5] text-black"
              : "bg-[#fff] text-gray-700"
          }`}
        >
          Completed
          <div
            className={`ml-4 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
              filter === "Purchase"
                ? "bg-[#ff8c00] text-white"
                : "bg-[#E4E7EC] text-[#344054]"
            }`}
          >
            {counts["Purchase"]}
          </div>
        </button>
        <button
          onClick={() => handleFilterChange("Filter")}
          className={`flex items-center text-sm px-2 py-1 rounded border ${
            filter === ""
              ? "bg-yellow-500 text-white"
              : "bg-white text-gray-700"
          } hover:bg-gray-300`}
        >
          <VscFilter className="mr-1" />
          <span className="mr-1">Filter</span>
        </button>
      </div>
      <Table headers={headers} rows={rows} />
    </div>
  );
}
