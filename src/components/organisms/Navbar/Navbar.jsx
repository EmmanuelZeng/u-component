import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../atoms/Button/Button.jsx";
import Logo from "../../atoms/Logo/Logo.jsx";
import Avatar from "../../atoms/Avatar/Avatar.jsx";
import Text from "../../atoms/Text/Text.jsx";
import UserPopup from "./UserPopup.jsx";

/**
 * The main navbar component
 */
const Navbar = ({
  logo_url,
  homePath,
  onSignup,
  onSignin,
  isAuthenticated,
  user,
  openResponsiveSidebarHandler,
  app,
  displayName,
  onDeconnect,
}) => {
  const [open, setOpen] = useState(false);
  const responsiveMenuState = open ? "" : "hidden";

  const toggleOpenResponsiveTopbar = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-white px-2 drop-shadow-sm sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full top-0 left-0 z-20">
      <div className="w-[97%] flex flex-wrap justify-between items-center mx-auto py-2">
        <div className="flex items-center gap-2">
          <Button
            onClick={openResponsiveSidebarHandler}
            data-collapse-toggle="navbar-cta"
            variant="filled"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </Button>
          <a href={homePath}>
            <Logo logo_url={logo_url} />
          </a>
        </div>
        <button
          onClick={toggleOpenResponsiveTopbar}
          data-collapse-toggle="navbar-cta"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${responsiveMenuState} justify-between items-center w-full md:flex transition ease-in-out md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0 md:p-0 md:mt-0">
            {!isAuthenticated ? (
              <>
                {typeof onSignin === "function" && (
                  <li className="w-full md:w-fit">
                    <Button
                      size="small"
                      type="primary"
                      fullWidth
                      onclick={onSignin}
                    >
                      Se connecter
                    </Button>
                  </li>
                )}
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Avatar
                  width={2.4}
                  height={2.4}
                  className="bg-white hover:bg-gray1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </Avatar>

                <UserPopup user={user} onDeconnect={onDeconnect} />
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  /**
   * The logo image url
   */
  logo_url: PropTypes.string.isRequired,
  /**
   * The function to be called on the signup button click
   */
  onSignin: PropTypes.any,
  /**
   * The function to be called on the signin button click
   */
  onSignup: PropTypes.any,
  /**
   * The user authentication state
   */
  isAuthenticated: PropTypes.bool,
  /**
   * The connected user obect
   */
  user: PropTypes.any,
  /**
   * The open sidebar button handler
   */
  openResponsiveSidebarHandler: PropTypes.func,
  /**
   * The app object containing the title and the icon
   */
  app: PropTypes.object,
  /**
   * Determines whether to display the enterprise name or not
   */
  displayName: PropTypes.bool,
  /**
   * The action to be triggered when we click on deconnection button
   */
  onDeconnect: PropTypes.func,
};

Navbar.defaultProps = {
  user: {},
  isAuthenticated: false,
  openResponsiveSidebarHandler: () => {},
  onSignin: null,
  onSignup: null,
  displayName: true,
  app: {
    title: "Configurations",
    denomination: "Entreprise name",
  },
};

export default Navbar;
