"use client";
import GoBackButton from "@/app/components/sidebar/GoBackButton";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import Image from "next/image";
import { VscCheck } from "react-icons/vsc";
import man from "../../../../../../public/assets/images/Image.png";

export default function Home() {
  return (
    <main className="px-4 sm:px-6 md:px-8">
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
          <h1 className="text-xl font-semibold">Olamide John</h1>
          <h5 className="text-sm text-gray-600">olamidejohn@gmail.com</h5>
        </div>
      </div>

      <div className="relative inline-block ml-4 mb-4">
        <span className="text-xs sm:text-sm font-semibold text-gray-700">
          Overview
        </span>
        <hr className="absolute bottom-0 left-0 w-16 border-black" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        {/* Left section with Milestone details */}
        <div className="flex-1 w-full sm:max-w-[600px] h-[300px] overflow-hidden mb-80">
          <div className="border rounded-lg h-full">
            {/* Gray Header for Milestone Details */}
            <div className="bg-gray-200 p-3 sm:p-4 rounded-t-lg  w-full">
              <h4 className="text-lg sm:text-xl font-semibold">
                Registration Details
              </h4>
            </div>

            <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="flex items-center gap-3 px-2 py-3">
                <span className="text-gray-500">
                  <HiOutlineUser className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-xs text-gray-500">Full Name</h4>
                  <p className="font-semibold text-sm sm:text-base">John Doe</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 px-2 py-3">
                <span className="text-gray-500">
                  <HiOutlineEnvelope className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-xs text-gray-500">Email</h4>
                  <p className="font-semibold text-sm sm:text-base">
                    johndoe@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-center gap-3 px-2 py-3">
                <span className="text-gray-500">
                  <HiOutlinePhone className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-xs text-gray-500">Phone Number</h4>
                  <p className="font-semibold text-sm sm:text-base">
                    08168141116
                  </p>
                </div>
              </div>

              {/* Registration Date */}
              <div className="flex items-center gap-3 px-2 py-3">
                <span className="text-gray-500">
                  <HiOutlineCalendarDays className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-xs text-gray-500">Registration Date</h4>
                  <p className="font-semibold text-sm sm:text-base">
                    23/04/2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
