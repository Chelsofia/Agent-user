import { FC } from "react";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  children: React.ReactNode; // Update to React.ReactNode to handle all types of children
  status?: "success" | "failed" | "pending";
};

const badgeStyles: Record<string, string> = {
  registration: "text-[#1DA01D] bg-[#E7F6EC] ring-green-600/20 bg-green-100",
  investment: "text-[#11ABDC] bg-[#E7F7FB] ring-blue-600/10 bg-blue-100",
  purchase: "text-[#FF8C00] bg-[#FFECE5] ring-yellow-600/10 bg-yellow-100",
  default: "text-gray-700 bg-gray-50 ring-gray-600/10 bg-gray-100",
};

const statusStyles: Record<string, string> = {
  success: "text-[#1DA01D] bg-green-50 ring-green-600/20 bg-green-100",
  failed: "text-red-700 bg-red-50 ring-red-600/20 bg-red-100",
  pending: "text-[#FF8C00] bg-[#FFECE5] ring-orange-600/20 bg-orange-100",
};

export const Badge: FC<BadgeProps> = ({ children, status }) => {
  // Ensure children is a string before calling toLowerCase
  const badgeTypeStyle =
    typeof children === "string" && badgeStyles[children.toLowerCase()]
      ? badgeStyles[children.toLowerCase()]
      : badgeStyles.default;

  // Determine status style if status is provided
  const badgeStatusStyle = status ? statusStyles[status] : "";

  // Merge styles
  const badgeStyle = twMerge(
    "inline-flex items-center rounded-md px-3 py-[2px] text-[12px] font-medium capitalize",
    badgeTypeStyle,
    badgeStatusStyle
  );

  return <span className={badgeStyle}>{children}</span>;
};
