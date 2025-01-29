"use cient";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";

const GoBackButton = () => {
  const [previousPage, setPreviousPage] = useState<string>("");

  const handleGoBack = () => {
    window.history.back();
  };

  // Get the previous page name when the component mounts (only on the client-side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const referrer = document.referrer;
      const getPageName = (url: string) => {
        // You can extract the page name from the URL here (for simplicity, just extracting the last part)
        const urlParts = url.split("/");
        return urlParts[urlParts.length - 1] || "Previous Page";
      };
      setPreviousPage(getPageName(referrer));
    }
  }, []);

  return (
    <button onClick={handleGoBack} className="flex items-center space-x-4 p-2">
      <div className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-lg shadow-md border border-gray-300">
        <IoArrowBack size={16} />
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Go Back</span>
        <span className="text-orange-500 font-semibold">{previousPage}</span>
      </div>
    </button>
  );
};

export default GoBackButton;
