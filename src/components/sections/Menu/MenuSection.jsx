import React, { useState } from "react";
import AddPlates from "../../Addplates";
import AddSectionForm from "../../Addsectionmenu";
import { motion } from "framer-motion";

const mas = [
  {
    id: 1,
    title: "BEST SELLER",
  },
  {
    id: 2,
    title: "PIZZA",
  },
  {
    id: 3,
    title: "DESSERT",
  },
  {
    id: 4,
    title: "DRINKS",
  },
];

export default function MenuSection() {
  const [isFlex, setIsFlex] = useState("none");
  const [isVisible, setIsVisible] = useState(false);
  const [isFlexPlatesForm, setIsFlexPlatesForm] = useState("none");
  const [isVisiblePlates, setIsVisiblePlates] = useState(false);

  const triggerToggleForm = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setIsFlex("flex");
    } else {
      setIsFlex("none");
    }
  };

  const triggerToggleAddPlates = () => {
    setIsVisiblePlates(!isVisiblePlates);
    if (!isVisiblePlates) {
      setIsFlexPlatesForm("flex");
    } else {
      setIsFlexPlatesForm("none");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container px-4 md:px-12 py-10 mx-auto"
    >
      <AddSectionForm
        visible={isFlex}
        isVisiblePlates={isVisiblePlates}
        triggerToggleForm={triggerToggleForm}
        triggerToggleAddPlates={triggerToggleAddPlates}
      />
      <AddPlates
        visible={isFlexPlatesForm}
        triggerToggleAddPlates={triggerToggleAddPlates}
        todoItems={mas}
      />
      <div className="flex items-center justify-between">
        <h1 className="text-gray-900 font-bold text-2xl">Menu</h1>
        <button
          onClick={triggerToggleForm}
          className="flex items-center px-6 py-3.5 main_color text-white text-sm rounded-md uppercase 
          transition-colors duration-200 hover:bg-green-400"
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
          <span>Add section</span>
        </button>
      </div>
      <div className="grid sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mt-8">
        {mas.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white shadow-lg rounded-xl"
          >
            <img
              className="h-44 w-full rounded-t-xl"
              src="https://picsum.photos/seed/picsum/100/50"
            />
            <h1 className="text-gray-900 font-bold text-sm text-center px-4 py-6">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
