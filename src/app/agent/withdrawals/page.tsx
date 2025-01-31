"use client";

import { Badge } from "@/app/components/badge";
import { ConditionalRender } from "@/app/components/conditional_renderer";
import { useModal } from "@/app/components/modal";
import { Table } from "@/app/components/table/Table";
import { formatNaira } from "@/app/utils/currencyFormatter";
import { Fragment, useState } from "react";
import Image from "next/image";
import zenith from "../../../../public/assets/images/Zenith Bank svg.png";
import Heading from "../../components/heading/Heading";

// Define the Item interface
interface Item {
  amount: number | string;
  act_no: string;
  act_name: string;
  bank: string;
  created_at: string;
  status: string;
  ref_no : string;
  id?: string; // Optional, if it may not always be available
}

const Earnings = () => {
  const mapStatusToBadgeStatus = (status: string) => {
    switch (status.toLowerCase()) {
      case "successful":
        return "success";
      case "failed":
        return "failed";
      case "pending":
        return "pending";
      default:
        return undefined;
    }
  };

  const data: Item[] = [
    {
      id: "Trnx123456789012",
      amount: 20000,
      act_no: "08863829822",
      act_name: "Amos Moses",
      bank: "Gt Bank Plc",
      created_at: "10/12/2024",
      ref_no: "#846647XYHAR",
      status: "successful",
    },
    {
      id: "Trnx123456789013",
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      bank: "Gt Bank Plc",
      created_at: "10/12/2024",
      ref_no: "#846647XYHAR",
      status: "pending",
    },
    {
      id: "Trnx123456789014",
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      bank: "Gt Bank",
      created_at: "10/12/2024",
      ref_no: "#846647XYHAR",
      status: "failed",
    },
    {
      id: "Trnx123456789015",
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      bank: "Gt Bank",
      created_at: "10/12/2024",
      ref_no: "#846647XYHAR",
      status: "successful",
    },
    {
      id: "Trnx123456789016",
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      bank: "Gt Bank",
      created_at: "10/12/2024",
      ref_no: "#846647XYHAR",
      status: "successful",
    },
    {
      id: "Trnx123456789017",
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      bank: "Gt Bank",
      created_at: "10/12/2024",
      ref_no: "#846647XYHAR",
      status: "pending",
    },
  ];

  // State to hold selected item for the modal
  const [selectedItem, setSelectedItem] = useState<Item | null>(null); // Set the type of the state

  const { Modal, showModal } = useModal();
  const isFetching = false;

  return (
    <div>
      <ConditionalRender isFetching={isFetching}>
        <Table
          headers={[
            { title: "Amount" },
            { title: "Beneficiary Account Name" },
            { title: "Beneficiary Account Number" },
            { title: "Status" },
            { title: "Transaction Date" },
            { title: "Action" },
          ]}
          isFetching={isFetching}
        >
          {data?.map((item: Item, i) => (
            <Fragment key={i}>
              <Table.Cell className="text-sm py-6 px-4">
                {formatNaira(Number(item?.amount))}
              </Table.Cell>

              <Table.Cell className="text-sm py-6 px-4">
                {item?.act_name}
              </Table.Cell>

              <Table.Cell className="text-sm py-6 px-4 flex items-center gap-2">
                {/* Image and Account Number side by side */}
                <Image
                  src={zenith}
                  alt="bank-logo"
                  quality={100}
                  height={20}
                  width={20}
                />
                <span>{item?.act_no}</span>
              </Table.Cell>

              <Table.Cell className="text-sm py-6 px-4">
                <Badge key={i} status={mapStatusToBadgeStatus(item.status)}>
                  {item.status}
                </Badge>
              </Table.Cell>

              <Table.Cell className="text-sm py-6 px-2">
                {item?.created_at}
              </Table.Cell>

              <Table.Cell className="text-sm cursor-pointer py-6 text-secondary font-bold px-2">
                <span
                  onClick={() => {
                    setSelectedItem(item); // Set selected item
                    showModal(true); // Show modal
                  }}
                >
                  View Receipt
                </span>
              </Table.Cell>
            </Fragment>
          ))}
        </Table>

        {/* Modal for showing selected transaction details */}
        <Modal>
          {selectedItem && (
            <>
              <Heading className="ml-24 text-secondary">
                Withdrawal Details
              </Heading>

              <div className="p-4">
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h1 className="text-center text-2xl font-bold mb-2">
                    {formatNaira(Number(selectedItem.amount))}
                  </h1>
                  <p className="text-center text-green-500">Withdraw</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">Transaction ID:</div>
                    <div className="text-right flex-1">
                      {selectedItem.id || "N/A"}
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">
                      Receiver's Account Number:
                    </div>
                    <div className="text-right flex-1">
                      {selectedItem.act_no}
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">
                      Receiver's Account Name:
                    </div>
                    <div className="text-right flex-1">
                      {selectedItem.act_name}
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">Bank:</div>
                    <div className="text-right flex-1">{selectedItem.bank}</div>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">Reference No:</div>
                    <div className="text-right flex-1">
                      {selectedItem.ref_no}
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <div className="font-semibold">Date and Time:</div>
                    <div className="text-right flex-1">
                      {selectedItem.created_at}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="font-semibold">Status:</div>
                    <div className="text-right flex-1 flex items-center justify-end">
                      <Badge
                        status={mapStatusToBadgeStatus(selectedItem.status)}
                      >
                        {selectedItem.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => {}}
                    className="bg- text-primary border border-primary py-2 px-4 rounded"
                  >
                    Share Receipt
                  </button>

                  <button
                    onClick={() => {}}
                    className="bg-primary text-white py-2 px-4 rounded"
                  >
                    Download Receipt
                  </button>
                </div>
              </div>
            </>
          )}
        </Modal>
      </ConditionalRender>
    </div>
  );
};

export default Earnings;
