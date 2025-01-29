"use client";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "@/app/components/form";
import { Fragment, useState } from "react";
import { ConditionalRender } from "@/app/components/conditional_renderer";
import { Table } from "@/app/components/table/Table";
import { useModal } from "@/app/components/modal";
import { PlusIcon } from "@heroicons/react/24/outline";
import Heading from "@/app/components/heading/Heading";

const SettlementContent: React.FC = () => {
  const [display, setDisplay] = useState("display");
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();
  const isFetching = false;
  const { Modal, showModal } = useModal();
  const data = [
    {
      name: "LLoyd Perfect",
      bank_name: "Access bank",
      account_number: "08767898767",
    },
    {
      name: "LLoyd Perfect",
      bank_name: "Access bank",
      account_number: "08767898767",
    },
    {
      name: "LLoyd Perfect",
      bank_name: "Access bank",
      account_number: "08767898767",
    },
    {
      name: "LLoyd Perfect",
      bank_name: "Access bank",
      account_number: "08767898767",
    },
    {
      name: "LLoyd Perfect",
      bank_name: "Access bank",
      account_number: "08767898767",
    },
  ];
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <h1 className="font-bold">Account Information</h1>
        <p>Add settlement accounts here.</p>
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => {
            showModal(true);
            setDisplay("create");
          }}
          className="rounded-md"
          leftIcon={<PlusIcon className="w-5 h-5" />}
        >
          Add acount
        </Button>
      </div>
      <ConditionalRender isFetching={isFetching}>
        {/* <InvestmentFilter /> */}
        <Table
          headers={[
            { title: "Full Name" },
            { title: "Account Number" },
            { title: "Account Name" },
            { title: "Action" },
          ]}
          isFetching={isFetching}
        >
          {data?.map((item: any, i) => (
            <Fragment key={i}>
              <Table.Cell className="text-sm py-6 px-4">
                {item?.name}
              </Table.Cell>
              <Table.Cell className="text-sm py-6 px-4">
                {item?.account_number}
              </Table.Cell>

              <Table.Cell className="text-sm py-6 px-2">
                {item?.bank_name}
              </Table.Cell>
              <Table.Cell className="text-sm cursor-pointer py-6 text-secondary font-bold px-2">
                <span
                  onClick={() => {
                    showModal(true);
                    setDisplay("delete");
                  }}
                >
                  {" "}
                  remove account
                </span>
              </Table.Cell>
            </Fragment>
          ))}
        </Table>
      </ConditionalRender>
      <Modal>
        {display === "delete" ? (
          <div>
            <div className="text-center space-y-5 mt-5">
              <Heading>Are you sure you want to remove this account?</Heading>
              <p>Note action is irreverseble</p>
              <div className="flex justify-between items-center gap-8">
                <Button
                  isFullWidth
                  className="py-3"
                  onClick={() => showModal(false)}
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => showModal(false)}
                  isFullWidth
                  className="py-3"
                  color="danger"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                id="bank-account"
                type="text"
                label="Account Name"
                placeholder="Amos Moses"
                {...register("bankAccount", {
                  required: "Bank account name is required",
                })}
                error={errors.bankAccount?.message}
              />
              <Input
                id="bank-account-number"
                label="Account Number"
                placeholder="043216432"
                {...register("bankAccountNumber", {
                  required: "Bank account number is required",
                })}
                error={errors.bankAccountNumber?.message}
              />

              <Select
                control={control}
                name="bank-name"
                label="Bank Name"
                error={errors.bankName?.message && "Bank name is required"}
              />
              <Button
                className="!py-3"
                onClick={() => showModal(false)}
                isFullWidth
              >
                Submit
              </Button>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SettlementContent;
