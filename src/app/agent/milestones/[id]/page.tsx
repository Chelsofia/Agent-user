"use client";
import GoBackButton from "@/app/components/sidebar/GoBackButton";

export default function Home() {
  return (
    <main>
      <GoBackButton />
      <h1 className="font-bold text-4xl ml-4">Sales Performance</h1>
      <p className="text-gray-600 mb-4 ml-4">Landagent2435678</p>

      <div className="relative inline-block ml-4 mb-4">
        <span className="text-sm font-semibold text-gray-700 ">Overview</span>
        <hr className="absolute bottom-0 left-0 w-16 border-black " />
      </div>

      <div className="flex space-x-8 ">
        {/* Left section with Milestone details */}
        <div className="flex-1 h-[400px]">
          <div className="border rounded-lg h-full">
            {/* Gray Header for Milestone Details */}
            <div className="bg-gray-200 p-4 rounded-t-lg w-full">
              <h4 className="text-lg font-bold">Milestone details</h4>
            </div>
            <div className="p-4">
              <h4 className="text-sm text-gray-600">Name</h4>
              <h1 className="font-semibold">Sales Performance</h1>

              <div className="mt-5">
                <h4>Details</h4>
                <p className="font-semibold">
                  Successfully complete 5 real estate transactions (investment
                  and purchase). Handle a mix of investment and purchase
                  clients, providing tailored advice and negotiation strategies.
                </p>

                <div className="mt-5">
                  <h3>Type</h3>
                  <p className="font-semibold">Registration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right section with Goal */}
        <div className="flex-1 h-[400px]">
          <div className="border rounded-lg h-full">
            {/* Gray Header for Goal */}
            <div className="bg-gray-200 p-8 rounded-t-lg w-full">
              <h4 className="text-lg font-bold"></h4>
            </div>
            <div className="p-4">
              <h4>Goal</h4>
              <p className="font-semibold">
                Complete 5 successful real estate transactions, which include
                investments (e.g. residential properties, commercial properties)
                and purchase (residential homes, land, or other properties).
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
