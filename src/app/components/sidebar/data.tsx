import { CogIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";
import { WalletMoney } from "iconsax-react";
import { TbUserCircle } from "react-icons/tb";
import { SlWallet } from "react-icons/sl";
import { BiAward } from "react-icons/bi";
import { TbWallet } from "react-icons/tb";

export const navItems = [
  {
    title: "Dashboard",
    to: "/agent/dashboard",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
  },
  {
    title: "Settings",
    to: "/agent/settings",
    icon: <CogIcon className="w-5 h-5" />,
  },
  {
    title: "Refferals",
    to: "/agent/referrals",
    icon: <TbUserCircle className="w-5 h-5" />,
  },
  {
    title: "Milestones",
    to: "/agent/milestones",
    icon: <BiAward className="w-5 h-5" />,
  },

  {
    title: "Withdrawals",
    to: "/agent/earnings",
    icon: <TbWallet className="w-5 h-5" />,
  },
  {
    title: "Wallet",
    to: "/agent/wallet",
    icon: <TbWallet className="w-5 h-5" />,
  },
];
