
import Image from "next/image";
import { ReactNode } from "react";
import brand from "../../../public/assets/images/logo.png";
interface LogoProps {
  children?: ReactNode;
}

const Logo: React.FC<LogoProps> = ({ children }) => {
  children = (
    <div>
    
    </div>
  );
  return (
    <div className=" px-5 py-2  flex items-center">
      <div className="h-[100%] w-[100%] mt-8">
        <Image src={brand} alt="logo" width={200} />
      </div>
      <div className=" w-12 h-12 bg-agent  flex items-center justify-center"></div>
      <div>{children}</div>
    </div>
  );
};

export default Logo;
