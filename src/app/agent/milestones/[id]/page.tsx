"use client";
import GoBackButton from "@/app/components/sidebar/GoBackButton";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 md:px-8">
      <GoBackButton />
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl ml-4">
        Sales Performance
      </h1>
      <p className="text-gray-600 mb-4 ml-4 text-sm sm:text-base">
        Landagent2435678
      </p>

      <div className="relative inline-block ml-4 mb-4">
        <span className="text-xs sm:text-sm font-semibold text-gray-700">
          Overview
        </span>
        <hr className="absolute bottom-0 left-0 w-16 border-black" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        {/* Left section with Milestone details */}
        <div className="flex-1 w-full sm:max-w-[600px] h-[500px]">
          <div className="border rounded-lg h-full">
            {/* Gray Header for Milestone Details */}
            <div className="bg-gray-200 p-3 sm:p-4 rounded-t-lg w-full">
              <h4 className="text-lg sm:text-xl font-semibold">
                Milestone details
              </h4>
            </div>
            <div className="p-3 sm:p-4 overflow-auto">
              <h4 className="text-xs sm:text-sm text-gray-600">Name</h4>
              <h1 className="font-semibold text-sm sm:text-base">
                Sales Performance
              </h1>

              <div className="mt-4 sm:mt-5">
                <h4 className="text-xs sm:text-sm">Details</h4>
                <p className="font-semibold text-xs sm:text-sm">
                  Successfully complete 5 real estate transactions (investment
                  and purchase). Handle a mix of investment and purchase
                  clients, providing tailored advice and negotiation strategies.
                </p>
                <div className="mt-4 sm:mt-5">
                  <h4 className="text-xs sm:text-sm">Goal</h4>
                  <p className="font-semibold text-xs sm:text-sm">
                    Complete 5 successful real estate transactions, which
                    include investments (e.g. residential properties, commercial
                    properties) and purchase (residential homes, land, or other
                    properties).
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-10 sm:gap-32 mt-4 sm:mt-5">
                  <div>
                    <h3 className="text-xs sm:text-sm">Type</h3>
                    <p className="font-semibold text-xs sm:text-sm">
                      Registration
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm">Reward</h3>
                    <p className="font-semibold text-xs sm:text-sm">Car</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
