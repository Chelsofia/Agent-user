import React from "react";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/20/solid";

interface SearchFilterProps {
  placeholder: string;
  className?: string;
  value?: string;
  setValue?: (value: string) => void;
  onSearch?: () => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  placeholder,
  value = "",
  setValue,
  onSearch,
  className,
}) => {
  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.();
        }}
      >
        <input
          placeholder={placeholder}
          value={value}
          className={` border w-full text-[12px]  placeholder:text-gray-500 border-black py-[8px] outline-none focus:ring-[0.9px] focus:ring-primary rounded-lg pl-10 ${className}`}
          onChange={(e) => setValue?.(e.target.value)}
        />
        {value?.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setValue?.("");
              setTimeout(() => {
                onSearch?.();
              }, 1);
            }}
          >
            <XCircleIcon className="w-5 h-5 absolute top-3 right-9 text-gray-500" />
          </button>
        )}
        <button type="submit">
          <MagnifyingGlassIcon
            className={`w-5 h-5 absolute top-[9px] left-[9px] text-gray-400`}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchFilter;
