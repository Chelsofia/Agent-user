"use client";
import React, { useState } from "react";
import { Badge } from "../../components/badge";
import { VscFilter } from "react-icons/vsc";
import { Modal } from "../../components/modal";
import HeaderWrapper from "../../components/sidebar/Header";
import AppWrapper from "@/app/components/wrapper";
import Table from "../../components/tableSection";
import WalletCard from "../../components/card";
import { walletData } from "./data";
import Heading from "../../components/heading/Heading";
import SearchBar from "../../components/searchBar";
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineXCircle,
} from "react-icons/hi";
import SearchFilter from "@/app/components/searchfilter/SearchFilter";

type Transaction = {
  id: string;
  amount: string;
  account_no: string;
  account_name: string;
  bank_name: string;
  reference_no: string;
  date: string;
  status: string;
  action?: string;
};

export default function WalletPage() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const mapStatusToBadgeStatus = (status: string) => {
    switch (status.toLowerCase()) {
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

  const counts = {
    All: walletData.length,
    Successful: walletData.filter((item) => item.status === "successful")
      .length,
    Pending: walletData.filter((item) => item.status === "pending").length,
    Failed: walletData.filter((item) => item.status === "failed").length,
  };

  const filteredData = walletData
    .filter(
      (item) =>
        filter === "All" || item.status.toLowerCase() === filter.toLowerCase()
    )
    .filter((item) => item.id.toLowerCase().includes(searchQuery));

  const rows = filteredData.map((item, index) => [
    item.id,
    item.amount,
    <Badge key={index} status={mapStatusToBadgeStatus(item.status)}>
      {item.status}
    </Badge>,
    <button
      key={index}
      className="text-secondary font-bold hover:underline"
      onClick={() => {
        setSelectedTransaction(item);
        setIsModalOpen(true);
      }}
    >
      View Receipt
    </button>,
  ]);

  return (
    <>
      <AppWrapper title="Wallet">
        <div className="p-6 bg-white w-full">
          <WalletCard />

          <br />
          <div className="mb-4 flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="w-full sm:w-auto">
              <SearchFilter
                placeholder="Search transactions by Transaction ID"
                className="!w-full sm:!w-[250px]"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 sm:flex-nowrap items-center w-full">
              <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                <button
                  onClick={() => handleFilterChange("All")}
                  className={`flex items-center text-sm px-2 py-1 rounded border ${
                    filter === "All"
                      ? "bg-[#ffece5] text-black"
                      : "bg-[#fff] text-gray-700"
                  }`}
                >
                  {filter === "All" ? (
                    <HiOutlineCheckCircle className="mr-1 text-[#ff8c00]" />
                  ) : (
                    <HiOutlineCheckCircle className="mr-1" />
                  )}
                  Total Transactions
                  <div
                    className={`ml-2 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
                      filter === "All"
                        ? "bg-[#ff8c00] text-white"
                        : "bg-[#E4E7EC] text-[#344054]"
                    }`}
                  >
                    {counts["All"]}
                  </div>
                </button>

                <button
                  onClick={() => handleFilterChange("Successful")}
                  className={`flex items-center text-sm px-2 py-1 rounded border ${
                    filter === "Successful"
                      ? "bg-[#ffece5] text-black"
                      : "bg-[#fff] text-gray-700"
                  }`}
                >
                  {filter === "Successful" ? (
                    <HiOutlineCheckCircle className="mr-1 text-[#ff8c00]" />
                  ) : (
                    <HiOutlineCheckCircle className="mr-1" />
                  )}
                  Successful
                  <div
                    className={`ml-2 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
                      filter === "Successful"
                        ? "bg-[#ff8c00] text-white"
                        : "bg-[#E4E7EC] text-[#344054]"
                    }`}
                  >
                    {counts["Successful"]}
                  </div>
                </button>

                <button
                  onClick={() => handleFilterChange("Pending")}
                  className={`flex items-center text-sm px-2 py-1 rounded border ${
                    filter === "Pending"
                      ? "bg-[#ffece5] text-black"
                      : "bg-[#fff] text-gray-700"
                  }`}
                >
                  {filter === "Pending" ? (
                    <HiOutlineExclamationCircle className="mr-1 text-[#ff8c00]" />
                  ) : (
                    <HiOutlineExclamationCircle className="mr-1" />
                  )}
                  Pending
                  <div
                    className={`ml-2 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
                      filter === "Pending"
                        ? "bg-[#ff8c00] text-white"
                        : "bg-[#E4E7EC] text-[#344054]"
                    }`}
                  >
                    {counts["Pending"]}
                  </div>
                </button>

                <button
                  onClick={() => handleFilterChange("Failed")}
                  className={`flex items-center text-sm px-2 py-1 rounded border ${
                    filter === "Failed"
                      ? "bg-[#ffece5] text-black"
                      : "bg-[#fff] text-gray-700"
                  }`}
                >
                  {filter === "Failed" ? (
                    <HiOutlineXCircle className="mr-1 text-[#ff8c00]" />
                  ) : (
                    <HiOutlineXCircle className="mr-1" />
                  )}
                  Failed
                  <div
                    className={`ml-2 rounded-lg h-4 w-4 flex items-center justify-center text-xs ${
                      filter === "Failed"
                        ? "bg-[#ff8c00] text-white"
                        : "bg-[#E4E7EC] text-[#344054]"
                    }`}
                  >
                    {counts["Failed"]}
                  </div>
                </button>
              </div>

            
              <div className="ml-auto">
                <button
                  onClick={() => handleFilterChange("Filter")}
                  className={`flex items-center text-sm px-2 py-1 rounded border ${
                    filter === ""
                      ? "bg-yellow-500 text-white"
                      : "bg-white text-gray-700"
                  } hover:bg-gray-300`}
                >
                  <VscFilter className="mr-1" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Container for filter buttons and table */}
          <div>
            <Table
              headers={["Transaction ID", "Amount", "Status", "Actions"]}
              rows={rows}
            />
          </div>

          <Modal open={isModalOpen} setOpen={setIsModalOpen}>
            <Heading className="ml-16 text-secondary">
              Transaction Details
            </Heading>
            {selectedTransaction && (
              <div className="p-4">
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h1 className="text-center text-2xl font-bold mb-2">
                    {selectedTransaction.amount}
                  </h1>
                  <p className="text-center text-green-500">credit</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">Transaction ID:</div>
                    <div className="text-right flex-1">
                      {selectedTransaction.id}
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">Account Number:</div>
                    <div className="text-right flex-1">
                      {selectedTransaction.account_no}
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">Account Name:</div>
                    <div className="text-right flex-1">
                      {selectedTransaction.account_name}
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">Date and Time:</div>
                    <div className="text-right flex-1">
                      {selectedTransaction.date}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">Status:</div>
                    <div className="text-right flex-1 flex items-center justify-end">
                      <Badge
                        status={mapStatusToBadgeStatus(
                          selectedTransaction.status
                        )}
                      >
                        {selectedTransaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => {}}
                    className="bg- text-primary border border-primary py-2 px-4 rounded"
                  >
                    Share Receipt
                  </button>

                  <button
                    onClick={() => {}}
                    className="bg-primary text-white py-2 px-4 rounded"
                  >
                    Download Receipt
                  </button>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </AppWrapper>
    </>
  );
}
