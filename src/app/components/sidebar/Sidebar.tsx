"use client";
import Navbar from "./Navbar";
import {XCircleIcon } from "@heroicons/react/24/outline";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Logo from "../logo";
import { useRouter } from "next/navigation";
import Heading from "../heading/Heading";
import { PowerIcon } from "@heroicons/react/24/solid";
import { Button } from "../button";
import { handleLogout } from "@/app/utils/handleLogout";
import { useModal } from "@/app/components/modal";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  org?: { organization_name: string; status: string };
}

const Sidebar = ({ open, setOpen, org }: SidebarProps) => {
  const { push } = useRouter();
  const {Modal,showModal}=useModal()

  return (
    <nav
      className={`bg-primary w-[250px] duration-[0.5s] fixed top-0 ${
        open ? "left-0" : "-left-[300px]"
      } lg:left-0 z-[10] h-full`}
    >
      <XCircleIcon
        onClick={() => setOpen(false)}
        className="w-14 cursor-pointer lg:hidden block h-14 absolute -right-16 top-4 text-black"
      />
      <div className="px-5 mt-4 py-2">
        <Logo />
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed -z-10 top-0 lg:hidden block left-0 w-full h-full bg-[#0000007c]"
        />
      )}
      <div className="px-5 py-8"></div>
      <div className="px-5 h-[300px] overflow-x-hidden overflow-y-auto side">
        <Navbar setOpen={setOpen} />
      </div>

      <div
        onClick={() => showModal(true)}
        className="mt-auto cursor-pointer p-5 flex items-center justify-between bg-navy-900"
      >
        <div className="flex items-center py-12 space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-full">
            <span className="text-black font-bold">OM</span>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-semibold">Omawunmi</p>
            <p className="text-gray-400 text-sm">Oma@rayna.ui</p>
          </div>
        </div>
  
        <FaArrowRightFromBracket className="w-5 h-5 text-white" />
        <Modal>
          <div className="flex flex-col justify-center gap-6 mt-8">
            <Heading>Are you sure you want to logout?</Heading>
            <PowerIcon className="w-12 h-12 text-red-500 mx-auto" />
            <div className="flex  items-center gap-6">
              <Button
                onClick={() => {
                  handleLogout();
                  push("/");
                }}
                className="!py-3"
                isFullWidth
              >
                Continue
              </Button>
              <Button
                onClick={() => {
                  showModal(false);
                }}
                className="!py-3"
                isFullWidth
                color="danger"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </nav>
  );
};

export default Sidebar;
