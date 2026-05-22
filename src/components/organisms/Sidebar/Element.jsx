import React from "react";
import { useState } from "react";

const Element = ({ el }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <li
        onClick={(e) => setShow(!show)}
        className={`hover:text-[#9faec1] transition-all duration-200 text-gray1 cursor-pointer select-none`}
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center p-3 text-base font-medium rounded-lg">
            {el.icon}
            <span className="ml-3">{el.name}</span>
          </span>
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </div>
      </li>
      {show && el?.elements?.length > 0 && (
        <div className="ml-[3em] text-gray1">
          <ul className="space-y-3 list-disc">
            {el.elements.map((item) => (
              <li className="text-sm hover:text-gray2 cursor-pointer transition-all duration-200">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Element;
