"use client";
import { useState } from "react";
import AppWrapper from "@/app/components/wrapper";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const navigation = [
    { title: "Profile", href: "/agent/settings" },
    { title: "Security", href: "/agent/settings/security" },
    { title: "Settlement", href: "/agent/settings/settlement" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <AppWrapper title="Settings">
      <nav className="w-full max-w-4xl mb-4 mt-4">
        <div className="flex flex-col sm:mx-auto md:mx-0 md:flex-row w-fit rounded-lg overflow-hidden">
          {navigation.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`px-6 py-2 border text-center ${
                isActive(item.href) ? "bg-primary text-white" : "text-gray-500"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      <div className="p-4 bg-white rounded-b-lg mt-4">{children}</div>
    </AppWrapper>
  );
};

export default SettingsLayout;
