"use client";
import { ReactNode, Suspense, useState } from "react";
import Sidebar from "@/app/components/sidebar/Sidebar";
import "./globals.css";


interface RootLayoutProps {
  children: ReactNode;
  headerChildren?: ReactNode; // Reserved for future use
  isTime?: boolean; // Reserved for future use
  title?: string; // Reserved for future use
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar setOpen={setOpen} open={open} />
          <div className="px-8 lg:px-0">{children}</div>
        </Suspense>
      </body>
    </html>
  );
}
