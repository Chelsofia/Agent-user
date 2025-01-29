"use client";
// import { Filter } from "@/components/filter/Filter";
import {XCircleIcon } from "@heroicons/react/24/outline";
import { Check, Warning2 } from "iconsax-react";
import { VscFilter } from "react-icons/vsc";
import { useState } from "react";

export const WithdrawalFilter = () => {
  const [active, setActive] = useState<number>(0);
  const filters = [
    {
      label: "Filter",
     
      icon: <VscFilter className="w-5 h-5" />,
    },
    
   
  ];
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 mt-1">
        {filters.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setActive(i);
            }}
            className= " flex w-fit cursor-pointer text-[12px] items-center justify-between gap-2 border rounded-lg py-3 px-4"
          >
            <span
             
            >
              {item.icon}
            </span>
            <span className="font-[600]">{item.label}</span>
           
          </div>
        ))}
      </div>
      {/* <Filter
        onSelect={(val) => {
          console.log(val);
        }}
        options={[
          {
            label: "Ascending",
            value: "asc",
          },
          {
            label: "Descending",
            value: "desc",
          },
        ]}
      /> */}
    </div>
  );
};