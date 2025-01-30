import {
  EnvelopeIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Avatar from "../avatar";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/20/solid";
import { Badge } from "../badge";

export const ProfileDetails = () => {
  const organization = {
    full_name: "Olamide John",
    emails: "olamidejohn@gmail.com",
    date_created: "24/04/2024",
    referals: "10",
    bvn: "1234567890",
    address: "25 Joseph Allen Avenue, Ikeja Along, Lagos State",
    customer_id: "Landest12345",
    phone_number: "08078897867",
    status: "active",
    agent_name: "Amos Moses",
    agent_id: "Landagent2345",
    recent_time: "24/04/2024",
    role: "administrator",
  };
  return (
    <div className="p-3 sm:p-4 lg:p-5">
      <h5 className="text-secondary font-semibold text-sm sm:text-base">
        Profile Details
      </h5>
      <div className="flex justify-center flex-col items-center gap-3">
        <Avatar
          className="!bg-[#FFECE5]"
          size="32"
          name={organization?.full_name}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 mt-4">
        <div className="flex items-center gap-3 px-2 border-b py-3 col-span-1 sm:col-span-1 lg:col-span-6">
          <span className="text-gray-500">
            <UserIcon className="w-4 h-4" />
          </span>
          <div>
            <h4 className="text-xs text-gray-500">Full Name</h4>
            <p className="font-medium text-xs">{`${organization?.full_name}`}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-2 border-b py-3 col-span-1 sm:col-span-1 lg:col-span-6">
          <span className="text-gray-500">
            <EnvelopeIcon className="w-4 h-4" />
          </span>
          <div>
            <h4 className="text-xs text-gray-500">Email</h4>
            <p className="font-medium text-xs break-words">
              {organization?.emails}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-2 border-b py-3 col-span-1 sm:col-span-1 lg:col-span-6">
          <span className="text-gray-500">
            <PhoneArrowDownLeftIcon className="w-4 h-4" />
          </span>
          <div>
            <h4 className="text-xs text-gray-500">Location</h4>
            <p className="font-medium text-xs">{organization?.address}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-2 py-3 col-span-1 sm:col-span-1 lg:col-span-6 border-b">
          <span className="text-gray-500">
            <UserCircleIcon className="w-4 h-4" />
          </span>
          <div>
            <h4 className="text-xs text-gray-500">Status</h4>
            <p className="font-medium text-xs">
              <Badge>{organization?.status}</Badge>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
