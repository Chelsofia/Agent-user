import { FC, JSX } from "react";
import { twMerge } from "tailwind-merge";
import empty from "../../../public/assets/svg/search.svg"
import Image, { StaticImageData } from "next/image";

type EmptyStateProps = JSX.IntrinsicElements["div"] & {
  header: string;
  message: string;
  src?:StaticImageData
};

export const EmptyState: FC<EmptyStateProps> = ({
  header,
  message,
  children,
  className,
  src=empty,
  ...props
}) => {
  return (
    <div className={twMerge("text-center py-5", className)} {...props}>
      <div className="flex justify-center">
      <Image src={src} alt="not found" className="w-[300px] mt-8 mx-auto"/>
      </div>
      <h3 className="text-sm font-semibold text-gray-900 capitalize">
        {header}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{message}</p>
      {children}
    </div>
  );
};
