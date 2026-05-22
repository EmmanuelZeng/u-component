import React from "react";
import PropTypes from "prop-types";
import Element from "./Element.jsx";

const Sidebar = ({
  list,
  listApp,
  className,
  onClick,
  onClickApp,
  logo_url,
  currentPath,
  AppTitle
}) => {
  return (
    <div
      className={`bg-dark ${className}  w-[270px] fixed top-0 right-0 left-0 h-full flex flex-col`}
    >
      <div className="flex bg-[#151d31] justify-center items-center min-h-[76px]">
        <img className="w-[200px] h-[57px]" src={`${logo_url}`} alt="logo" />
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto scrollbar-hide md:scrollbar-default divide-y divide-gray4">
      {list &&
        <div className="w-full py-5 px-4">
            {AppTitle &&
              <h1 className="text-gray3 text-sm font-medium uppercase">{AppTitle}</h1>
            }
          <ul className="space-y-3 pt-3">
            {list?.map((el, index) => (
              <>
                {el?.elements?.length > 0 ? (
                  <Element el={el} key={index + "_" + el.name} />
                ) : (
                  <li
                    onClick={(e) => onClick(el)}
                    key={index + "_" + el.name}
                    className={`hover:text-[rgb(159,174,193)] ${
                      currentPath === el.active &&
                      "bg-white !text-primary font-medium shadow-lg rounded-lg"
                    } transition-all duration-200 text-gray2 cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center py-2 px-3 text-base font-medium rounded-lg">
                        {el.icon}
                        <span className="ml-3 text-sm">{el.name}</span>
                      </span>
                    </div>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      }
        
      {listApp &&
        <div className="w-full px-4 py-5">
          {list &&
            <h1 className="text-gray3 text-sm font-medium mb-3">AUTRES APPLICATIONS</h1>
          }
          <ul className="space-y-3">
            {listApp?.map((item, index) => (
              <li
                onClick={() => onClickApp(item)}
                key={index + "_" + item.name}
                className="hover:text-[rgb(159,174,193)] transition-all duration-200 text-gray2 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center py-2 px-3 text-base font-medium rounded-lg">
                    {item.icon}
                    <span className="ml-3 text-sm">{item.name}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        }
      </div>
      <div
        style={{
          borderTop: "0.3px solid",
          borderColor: "#4a4747",
        }}
        className="w-full px-4 py-[1em] relative bottom-0"
      >
        <ul className="space-y-3 text-sm">
          <li>
            <span className="text-gray3">
              © Copyright <b>DGI</b> 2022 All Rights Reserved.
            </span>
          </li>
          <li>
            <span className="text-gray3 flex space-x-1">
              <span>Crafted with</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-danger"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
              <span>by SBS</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  /**
   * The list of sidebar
   */
  list: PropTypes.array,
  /**
   * The title of the current application
   */
  AppTitle: PropTypes.string,
};

export default Sidebar;
