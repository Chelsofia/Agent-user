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
     <nav className="w-full max-w-4xl mb-4 mt-4">
          <div className="rounded-lg">
            <div className="flex border overflow-hidden rounded-xl w-fit">
              {navigation.map((item, i) => (
                <Link
                  key={i}
                  href={item?.href}
                  className={` border-r px-6 py-2 block ${
                    isActive(item?.href)
                      ? "bg-primary text-white"
                      : " text-gray-500"
                  }`}
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="p-4 bg-white rounded-b-lg mt-4">{children}</div>
    </AppWrapper>
  );
};

export default SettingsLayout;
