import React from "react";
import { motion } from "framer-motion";

export default function PlatesSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container px-4 md:px-12 py-10 mx-auto"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-gray-900 font-bold text-2xl">List of plates</h1>
        <button
          className="flex items-center px-6 py-3.5 main_color text-white text-sm rounded-md uppercase 
          transition duration-500 hover:bg-green-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>Add a plate</span>
        </button>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-7 mt-12">
        <div className="flex items-center bg-white relative shadow-xl rounded-lg px-6 py-4">
          <div className="w-6/12">
            <img
              className="rounded-full"
              width="160"
              height="160"
              src="https://picsum.photos/seed/picsum/700/700"
            />
          </div>
          <div className="w-full pt-3 ml-4">
            <h1 className="text-gray-900 font-bold">Salad</h1>
            <div className="absolute top-3 right-6 text-xl">:</div>
            <p className="text-sm text-gray-400 my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between items-center text-sm">
              <p className="main_text_color font-bold">$19.99</p>
              <p className="px-6 py-2 rounded-full bg-gray-100 font-bold">34</p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white relative shadow-xl rounded-lg px-6 py-4">
          <div className="w-6/12">
            <img
              className="rounded-full"
              width="160"
              height="160"
              src="https://picsum.photos/seed/picsum/700/700"
            />
          </div>
          <div className="w-full pt-3 ml-4">
            <h1 className="text-gray-900 font-bold">Salad</h1>
            <div className="absolute top-3 right-6 text-xl">:</div>
            <p className="text-sm text-gray-400 my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between items-center text-sm">
              <p className="main_text_color font-bold">$19.99</p>
              <p className="px-6 py-2 rounded-full bg-gray-100 font-bold">34</p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white relative shadow-xl rounded-lg px-6 py-4">
          <div className="w-6/12">
            <img
              className="rounded-full"
              width="160"
              height="160"
              src="https://picsum.photos/seed/picsum/700/700"
            />
          </div>
          <div className="w-full pt-3 ml-4">
            <h1 className="text-gray-900 font-bold">Salad</h1>
            <div className="absolute top-3 right-6 text-xl">:</div>
            <p className="text-sm text-gray-400 my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between items-center text-sm">
              <p className="main_text_color font-bold">$19.99</p>
              <p className="px-6 py-2 rounded-full bg-gray-100 font-bold">34</p>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-white relative shadow-xl rounded-lg px-6 py-4">
          <div className="w-6/12">
            <img
              className="rounded-full"
              width="160"
              height="160"
              src="https://picsum.photos/seed/picsum/700/700"
            />
          </div>
          <div className="w-full pt-3 ml-4">
            <h1 className="text-gray-900 font-bold">Salad</h1>
            <div className="absolute top-3 right-6 text-xl">:</div>
            <p className="text-sm text-gray-400 my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-between items-center text-sm">
              <p className="main_text_color font-bold">$19.99</p>
              <p className="px-6 py-2 rounded-full bg-gray-100 font-bold">34</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
