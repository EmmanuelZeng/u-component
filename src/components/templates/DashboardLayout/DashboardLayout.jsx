import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../organisms/Navbar/Navbar.jsx";
import Sidebar from "../../organisms/Sidebar/Sidebar.jsx";

/**
 * Dashboard layout template with Navbar and Sidebar
 */
const DashboardLayout = ({ children, logo_url, sidebarList, onSidebarClick, className }) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <Navbar logo_url={logo_url} />
      <div className="pt-[76px] flex">
        <div className="hidden md:block">
          <Sidebar list={sidebarList} onClick={onSidebarClick} />
        </div>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.any,
  logo_url: PropTypes.string,
  sidebarList: PropTypes.array,
  onSidebarClick: PropTypes.func,
  className: PropTypes.string,
};

DashboardLayout.defaultProps = {
  children: null,
  logo_url: "",
  sidebarList: [],
  onSidebarClick: () => {},
  className: "",
};

export default DashboardLayout;
