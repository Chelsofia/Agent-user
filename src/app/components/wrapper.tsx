"use client"
import { ReactNode, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import HeaderWrapper from "./sidebar/Header";
// import { Breadcrumb } from "./breadcrumbs/Breadcrumbs";


interface WrapperProps {
  children: ReactNode;
  headerChildren?: ReactNode;
  isTime?: boolean;
  title?: string;
  isBlur?:boolean
}
const AppWrapper = ({
  children,
  isTime,
  title,
  headerChildren,
  isBlur
}: WrapperProps) => {
  const [open, setOpen]=useState(false)
  
  return (
    <div className={`${isBlur&&"blur-md"}`}>
      <HeaderWrapper  onClick={()=>setOpen(!open)} title={title} isTime={isTime}>
        {headerChildren}
      </HeaderWrapper>
      <Sidebar  setOpen={setOpen} open={open} />
      <div className="lg:ml-[280px] lg:px-0 lg:mr-12">
        <div className="overflow-hidden px-8 lg:px-0 ">{children}</div>
      </div>
    </div>
  );
};
export default AppWrapper;
