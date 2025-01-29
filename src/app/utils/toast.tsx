"use client"
import { toast } from "react-hot-toast";

export const notifySuccess = (message: string) => {
  toast.success(message, { position: "top-right", duration: 5000 });
};

export const notifyError = (message: string) => {
  toast.error(message, { position: "top-right", duration: 5000 });
};
