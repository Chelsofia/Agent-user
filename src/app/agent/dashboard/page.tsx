"use client";

import AreaChart from "../../components/chart";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import AppWrapper from "@/app/components/wrapper";
import ProgressBar from "../../components/progressbar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const milestones = [
    {
      title: "Registration",
      progress: "50",
    },
    {
      title: "Purchase",
      progress: "60",
    },
    {
      title: "Investment",
      progress: "30",
    },
  ];

  return (
    <>
      <AppWrapper>
        <section>
          <div className="min-h-screen  p-8 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="bg-primary text-white p-4 rounded-md">
                <p className="text-xs">Total number of referrals</p>
                <h2 className="text-xl font-bold">500</h2>
                <Link
                  href="/agent/referrals"
                  className="flex items-center mt-2 text-yellow-300 hover:underline text-sm"
                >
                  View Referrals <FaArrowRight className="ml-2" />
                </Link>
              </div>

              <div className="bg-green-700 text-white p-4 rounded-md">
                <p className="text-xs">Total Transactions</p>
                <h2 className="text-xl font-bold">₦543,654,080.00</h2>
                <Link
                  href="/agent/wallet"
                  className="flex items-center mt-2 text-yellow-300 hover:underline text-sm"
                >
                  View Transactions <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
            <p className="py-3 font-bold">Milestones</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-9">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  className="bg-gray-100 border text-primary p-4 rounded-md"
                >
                  <p className="text-xs text-primary">
                    Total commission count for{" "}
                    {milestone.title.toLocaleLowerCase()}
                  </p>
                  <h2 className="text-xl font-bold my-3">
                    {milestone.progress}%
                  </h2>
                  <div className="mt-4">
                    <ProgressBar progress={milestone.progress} />
                  </div>
                  <Link
                    href="/agent/referrals"
                    className="flex items-center mt-2 text-primary hover:underline text-sm"
                  >
                    View more <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 h-[600px] rounded-md shadow-md">
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Top Referrals</h3>
                <div className="flex space-x-2 mt-2 md:mt-0">
                  <button className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
                    12 months
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
                    30 days
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-100 rounded-md hover:bg-gray-200">
                    7 days
                  </button>
                </div>
              </div>
              <div className="w-[100%] flex justify-center">
                <AreaChart />
              </div>
            </div>
          </div>
        </section>
      </AppWrapper>
    </>
  );
};

export default Dashboard;
