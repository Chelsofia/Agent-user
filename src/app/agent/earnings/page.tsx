"use client";

import { Badge } from "@/app/components/badge";
import { ConditionalRender } from "@/app/components/conditional_renderer";
import { useModal } from "@/app/components/modal";
import { Table } from "@/app/components/table/Table";
import { formatNaira } from "@/app/utils/currencyFormatter";
import { Fragment } from "react";
import { WithdrawalFilter } from "./filter/filter";
import Image from "next/image";
import zenith from "../../../../public/assets/images/Zenith Bank svg.png";
import Heading from "../../components/heading/Heading";

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

  const data = [
    {
      amount: 20000,
      act_no: "08863829822",
      act_name: "Amos Moses",
      created_at: "10/12/2024",
      status: "successful",
    },
    {
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      created_at: "10/12/2024",
      status: "pending",
    },
    {
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      created_at: "10/12/2024",
      status: "failed",
    },
    {
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      created_at: "10/12/2024",
      status: "successful",
    },
    {
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      created_at: "10/12/2024",
      status: "successful",
    },
    {
      amount: "2000",
      act_no: "08863829822",
      act_name: "Amos Moses",
      created_at: "10/12/2024",
      status: "pending",
    },
  ];
  const { Modal, showModal } = useModal();
  const isFetching = false;

  return (
    <div>
      
      <ConditionalRender isFetching={isFetching}>
        {/* <InvestmentFilter /> */}
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
          {data?.map((item: any, i) => (
            <Fragment key={i}>
              <Table.Cell className="text-sm py-6 px-4">
                {formatNaira(item?.amount)}
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
                    showModal(true);
                  }}
                >
                  {" "}
                  View Receipt
                </span>
              </Table.Cell>
            </Fragment>
          ))}
        </Table>
        <Modal>
          <Heading>Withdrawal details</Heading>
        </Modal>
      </ConditionalRender>
    </div>
  );
};

export default Earnings;
