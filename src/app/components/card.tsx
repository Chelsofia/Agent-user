"use client";
import React, { useState } from "react";
import { useModal } from "@/app/components/modal";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Input } from "./form/input";
import { Select } from "./form";
import { useForm } from "react-hook-form";

const WalletCard = () => {
  const { showModal, Modal } = useModal();
  const [isAmountVisible, setIsAmountVisible] = useState(true);
  const { control } = useForm();
  const toggleVisibility = () => setIsAmountVisible(!isAmountVisible);

  const commissions = [
    {
      title: "Total commissions",
      amount: " ₦140,000,000.00",
      bg: "bg-secondary",
    },
    {
      title: "Total investment commissions",
      amount: " ₦20,000,000.00",
      bg: "bg-primary",
      button_color: "bg-white text-primary",
    },
    {
      title: "Total properties commissions",
      amount: " ₦20,000,000.00",
      bg: "bg-primary",
      button_color: "bg-white text-primary",
    },
    {
      title: "Total registration commissions",
      amount: " ₦20,000,000.00",
      bg: "bg-secondary",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-8">
      {commissions.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} p-6 rounded-md w-full flex flex-col justify-between h-[150px] relative`}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs text-white">{item.title}</p>
            <button onClick={toggleVisibility} className="ml-2 text-white">
              {isAmountVisible ? (
                <EyeIcon className="w-5 h-5" />
              ) : (
                <EyeSlashIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          {isAmountVisible && (
            <h2 className="text-2xl text-white font-bold mt-4 flex-grow">
              {item.amount}
            </h2>
          )}
          <div className="absolute bottom-4 right-4 w-auto">
            <button
              onClick={() => showModal(true)}
              className={`${
                item?.button_color
                  ? item?.button_color
                  : "bg-primary text-white"
              } px-4 py-2 rounded-md`}
            >
              Withdraw Funds
            </button>
          </div>
        </div>
      ))}
      <Modal showCloseIcon={true} dismissOnclickOutside={true}>
        <form className="space-y-5">
          <Input
            label="Amount"
            id="amount"
            type="text"
            placeholder="Enter amount to withdraw"
          />
          <Input
            label="Amount Processed"
            id="amount"
            type="text"
            disabled
            value="800,000,000"
          />
          <Input
            label="Account Name"
            id="name"
            type="text"
            placeholder="Enter account name"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              label="Account Number"
              id="input"
              type="text"
              placeholder="Enter account number"
            />
            <Select name="bank" control={control} label="Choose bank" />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary w-full text-white px-4 py-2 rounded-md"
            >
              Withdraw Funds
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default WalletCard;
