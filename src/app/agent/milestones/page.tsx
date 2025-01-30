"use client";

import { Badge } from "@/app/components/badge";
import { ConditionalRender } from "@/app/components/conditional_renderer";
import { useModal } from "@/app/components/modal";
import { Table } from "@/app/components/table/Table";
import { useState } from "react";
import { formatNaira } from "@/app/utils/currencyFormatter";
import { Fragment } from "react";
import Link from "next/link";
import { HiOutlineUser } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa6";
import { VscFilter } from "react-icons/vsc";
import { WithdrawalFilter } from "./filter/filter";
import Image from "next/image";
import zenith from "../../../../public/assets/images/Zenith Bank svg.png";
import Heading from "../../components/heading/Heading";

const Milestones = () => {

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

  const [filter, setFilter] = useState<string>("All"); 
 const handleFilterChange = (newFilter: string) => {
   setFilter(newFilter);
 };


  
  const data = [
    {
      id: "1",
      name: "Amos Moses",
      type: "Registration",
      achieved: "5",
      goal: "Complete 5 successful registration",
      reward: "Car",
      date: "10/12/2024 11:59pm",
    },

    {
      id: "2",
      name: "Amos Moses",
      type: "Registration",
      achieved: "5",
      goal: "Complete 5 successful registration",
      reward: "House",
      date: "10/12/2024 11:59pm",
    },
    {
      id: "3",
      name: "Amos Moses",
      type: "Investment",
      achieved: "5",
      goal: "Complete 5 successful registration",
      reward: "Car",
      date: "10/12/2024 11:59pm",
    },
    {
      id: "4",
      name: "Amos Moses",
      type: "Purchase",
      achieved: "5",
      goal: "Complete 5 successful registration",
      reward: "House",
      date: "10/12/2024 11:59pm",
    },
    {
      id: "5",
      name: "Amos Moses",
      type: "Purchase",
      achieved: "5",
      goal: "Complete 5 successful registration",
      reward: "Car",
      date: "10/12/2024 11:59pm",
    },
    {
      id: "6",
      name: "Amos Moses",
      type: "Investment",
      achieved: "5",
      goal: "Complete 5 successful registration",
      reward: "Smart Tv",
      date: "10/12/2024 11:59pm",
    },
  ];

  const counts = {
      All: data.length,
      Registration: data.filter((item) => item.type === "Registration")
        .length,
      Investment: data.filter((item) => item.type === "Investment")
        .length,
      Purchase: data.filter((item) => item.type === "Purchase").length,
    };
  
  const { Modal, showModal } = useModal();
  const isFetching = false;

  return (
    <div>
      <ConditionalRender isFetching={isFetching}>
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
              All milestones
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
                <HiOutlineUser className="mr-3 text-[#ff8c00]" />
              ) : (
                <HiOutlineUser className="mr-3" />
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

            <button
              onClick={() => handleFilterChange("Filter")}
              className={`flex items-center text-sm px-3 py-2 rounded border ${
                filter === ""
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-700"
              } hover:bg-gray-300`}
            >
              <VscFilter className="mr-2" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <Table
          headers={[
            { title: "Name" },
            { title: "Type" },
            { title: "Achieved" },
            { title: "Goal" },
            { title: "Reward" },
            { title: "Date Created" },
            { title: "Action" },
          ]}
          isFetching={isFetching}
        >
          {data?.map((item: any, i) => (
            <Fragment key={i}>
              <Table.Cell className="text-sm py-6 px-4">
                {item?.name}
              </Table.Cell>
              <Table.Cell className="text-sm py-6 px-4">
                <Badge key={i} status={mapStatusToBadgeStatus(item.type)}>
                  {item.type}
                </Badge>
              </Table.Cell>

              <Table.Cell className="text-sm py-6 px-4">
                {item?.achieved}
              </Table.Cell>
              <Table.Cell className="text-sm py-6 px-4">
                {item?.goal}
              </Table.Cell>
              <Table.Cell className="text-sm py-6 px-4">
                {item?.reward}
              </Table.Cell>
              <Table.Cell className="text-sm py-6 px-4">
                {item?.date}
              </Table.Cell>

              <Table.Cell className="text-sm cursor-pointer py-6 text-secondary font-bold px-2">
                <Link href={`/agent/milestones/${item.id}`}>
                  <span>View More</span>
                </Link>
              </Table.Cell>
            </Fragment>
          ))}
        </Table>
        <Modal>
          <Heading>Withdrawal details</Heading>
        </Modal>
      </ConditionalRender>
    </div>
  );
};

export default Milestones;
