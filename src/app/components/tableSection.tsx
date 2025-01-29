import React, { JSX } from "react";
import ProgressBar from "./progressbar";

type TableProps = {
  headers: string[];
  rows: Array<Array<string | JSX.Element>>;
  progress?: string;
  title?: string;
};

const Table: React.FC<TableProps> = ({ headers, rows, title, progress }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-full mb-2">
      {progress && (
        <div className="bg-primary text-white p-4 mb-6 rounded-md">
          <p className="text-sm sm:text-xs py-2 text-center sm:text-left">
            Progress milestone for {title}
          </p>
          <ProgressBar progress={progress} />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
