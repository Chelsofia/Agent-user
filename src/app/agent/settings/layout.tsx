"use client";
import { useState } from "react";
import HeaderWrapper from "../../components/sidebar/Header";
import AppWrapper from "@/app/components/wrapper";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navigation = [
    { title: "Profile", href: "/agent/settings" },
    { title: "Security", href: "/agent/settings/security" },
    { title: "Settlement", href: "/agent/settings/settlement" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <AppWrapper title="Settings">
      <div>
        {/* Tabs */}
        <div className="flex flex-wrap my-6 gap-4 sm:flex-row sm:gap-8">
          {navigation.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className={`px-4 py-2 w-full sm:w-auto bg-white shadow-md text-center ${
                isActive(link.href)
                  ? "text-gray-800 font-bold bg-gray-300"
                  : "text-gray-600"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div>{children}</div>
      </div>
    </AppWrapper>
  );
};

export default SettingsLayout;
