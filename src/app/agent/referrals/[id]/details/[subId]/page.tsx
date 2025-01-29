"use client";
import { useParams, useSearchParams } from "next/navigation";
import { referralsData } from "../../../data"; // Import the referrals data
import {
  HiOutlineUsers,
  HiOutlineBuildingLibrary,
  HiOutlineCalendar,
} from "react-icons/hi2";
import Image from "next/image";
import man from "../../../../../../../public/assets/images/agent.png";
import GoBackButton from "@/app/components/sidebar/GoBackButton";
import {VscCheck } from "react-icons/vsc";



export default function ReferralDetailsPage() {
  const { id } = useParams(); // Accessing the dynamic 'id' parameter from the URL
  const searchParams = useSearchParams(); // Get query parameters

  // Find the referral based on the id
  const referral = referralsData.find((referral) => referral.id === id);

  // If no referral found, return a message (or handle the error)
  if (!referral) {
    return <div className="mt-6">Referral not found</div>;
  }

  return (
    <div className="mt-6">
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
      <div className="relative inline-block ml-4 mt-2">
        <span className="text-xs font-semibold text-gray-700">Overview</span>
        <hr className="absolute bottom-0 left-0 w-16 border-black" />
      </div>
      <div className="flex flex-col">
        <h1  className="font-bold text-xl mb-1">3-bedroom duplex ensuite</h1>
        <p className="text-gray-600">Ikeja GRA, Lagos</p>
      </div>

      <div className="grid grid-cols-2 gap-9 mt-4">
        <div className="border p-8 rounded-lg">
          
          <div className="mt-5 space-y-5">
            {/* Display No. of Units Purchased */}
            <div className="flex items-start gap-3">
              <HiOutlineUsers className="h-5 w-5 mt-1" />
              <div>
                <label className="text-sm font-bold">
                  Number of Units Purchased
                </label>
                <p>{referral.unitsPurchased}</p>{" "}
                {/* Display the number of units purchased */}
              </div>
            </div>

            {/* Display Payment Type */}
            <div className="flex items-start gap-3">
              <HiOutlineBuildingLibrary className="h-5 w-5 mt-1" />
              <div>
                <label className="text-sm font-bold">Payment Type</label>
                <p>{referral.paymentType}</p> {/* Display the payment type */}
              </div>
            </div>

            {/* Display Payment Duration */}
            <div className="flex items-start gap-3">
              <HiOutlineCalendar className="h-5 w-5 mt-1" />
              <div>
                <label className="text-sm font-bold">Payment Duration</label>
                <p>{referral.paymentDuration}</p>{" "}
                {/* Display the payment duration */}
              </div>
            </div>

            {/* Display Months Left */}
            <div className="flex items-start gap-3">
              <HiOutlineCalendar className="h-5 w-5 mt-1" />
              <div>
                <label className="text-sm font-bold">Months Left</label>
                <p>{referral.monthsLeft}</p> {/* Display the months left */}
              </div>
            </div>

            {/* Display Maturity Date */}
            <div className="flex items-start gap-3">
              <HiOutlineCalendar className="h-5 w-5 mt-1" />
              <div>
                <label className="text-sm font-bold">Maturity Date</label>
                <p>{referral.maturityDate}</p> {/* Display the maturity date */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
