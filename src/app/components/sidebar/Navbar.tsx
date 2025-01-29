"use client";
import Link from "next/link";
import { navItems } from "./data";
import { usePathname } from "next/navigation";

interface NavbarProps {
  setOpen: (open: boolean) => void;
}

const Navbar = ({ setOpen }: NavbarProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <div>
     
      <h1 className="text-[#FF8C00] text-xs">GET STARTED</h1>
      {navItems.map((item, i) => (
        <div key={i} className="mb-4">
          <div className="space-y-1 text-white mt-1">
            <Link
              onClick={() => setOpen(false)}
              href={item.to}
              className={`flex items-center px-3 gap-2 text-[14px] font-[400] py-2 rounded-md ${
                isActive(item.to) ? "bg-white text-black" : "text-white"
              }`}
            >
              <span className="block">{item.icon}</span>
              <span className="block">{item.title}</span>
            </Link>
            {i === 1 && <h1 className="text-[#FF8C00] pt-4 text-xs">USERS</h1>}
            {i === 3 && <h1 className="text-[#FF8C00] pt-4 text-xs">CASH FLOW</h1>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
