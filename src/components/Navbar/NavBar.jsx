import React from "react";
import { Link } from "react-router-dom";
import urls from "../../urls";
import Notifications from "../Notifications/Notifications";

export default function NavBar({ isSideBar, setIsSideBar }) {
  return (
    <nav className="bg-none border-b border-gray-300">
      {/* <div className="fixed top-0 inset-x-0"> */}
      <div className="container px-4 md:px-12 py-5 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <button
              onClick={() => setIsSideBar(!isSideBar)}
              type="button"
              className="md:hidden mr-2 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>

            <div className="text-xl font-semibold text-gray-700">
              <Link
                className="text-xl text-gray-400 lg:text-2xl hover:text-gray-700"
                to={urls.home}
              >
                HI, Restaurant
              </Link>
            </div>

            <div className="flex">
              <div className="flex items-center">
                <Notifications />

                <button
                  className="mx-6 text-gray-600 md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-12 h-12 overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full rounded-2xl"
                      alt="avatar"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}
