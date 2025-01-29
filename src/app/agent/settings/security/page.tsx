"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components/button";
import { Input } from "@/app/components/form/input";
import { AiOutlineCheck } from "react-icons/ai";
import { useModal } from "@/app/components/modal";

const SecurityContent: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const { showModal, Modal } = useModal();

  const onSubmit = (data: any) => {
    console.log(data);
    showModal(true);
  };

  return (
    <div className="w-[500px] mx-auto bg-white shadow-md p-6">
      <h2 className="font-bold">Change password</h2>
      <p>Please enter your current password to change your password.</p>
      <br />
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="current-password"
          type="password"
          label="Enter Current Password"
          placeholder="Enter current password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
              message:
                "Password must contain at least 8 characters, including one lowercase, one uppercase, one digit, and one special character like (#$%&@*).",
            },
          })}
          error={errors.password?.message}
        />
        <Input
          id="new-password"
          type="password"
          label="Enter New Password"
          placeholder="New password"
          {...register("newPassword", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
              message:
                "Password must contain at least 8 characters, including one lowercase, one uppercase, one digit, and one special character like (#$%&@*).",
            },
          })}
          error={errors.newPassword?.message}
        />
        <Input
          id="confirm-password"
          label="Confirm New Password"
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("newPassword") || "Passwords do not match",
          })}
          error={errors.confirmPassword && "Passwords do not match"}
        />
        <div className="flex gap-4 mt-4 justify-end">
          <Button className="rounded-md" type="submit">
            Update Password
          </Button>
        </div>
      </form>

      <Modal>
        <div className="text-center">
          <AiOutlineCheck className="bg-green-500 rounded-full text-white text-4xl mb-4 mx-auto" />
          <h2 className="text font-semibold">
            You have Changed your password successfully!
          </h2>

          <Button
            onClick={() => showModal(false)}
            className="mt-4 rounded-md w-[80%] py-3"
          >
            Done
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SecurityContent;
