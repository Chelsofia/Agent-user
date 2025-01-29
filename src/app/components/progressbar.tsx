import React from "react";

interface ProgressProps {
  progress?: string;
}

const ProgressBar: React.FC<ProgressProps> = ({ progress = "30" }) => {
  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-secondary h-full rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="flex justify-end text-sm mt-2 text-gray-700">
        {progress}/100
      </span>
    </div>
  );
};

export default ProgressBar;
