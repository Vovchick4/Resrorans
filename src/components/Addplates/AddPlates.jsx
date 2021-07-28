import React from "react";
import { motion } from "framer-motion";

const masCheckBox = [
  {
    id: 1,
    title: "PIZZA",
  },
];

export default function AddPlates({
  visible,
  triggerToggleAddPlates,
  todoItems,
}) {
  const addItem = () => {
    todoItems.unshift({
      index: todoItems.id + 1,
      title: masCheckBox.map((item) => item.title),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={visible === "flex" ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 jutify-center items-center w-full h-full bg-black bg-opacity-75 px-4"
      style={{ display: visible }}
    >
      <div className="block ml-auto mr-auto w-full max-w-2xl bg-white rounded-xl">
        <div className="flex justify-between px-12 py-8">
          <h1 className="text-gray-900 text-2xl font-bold">Add section</h1>
          <button
            onClick={triggerToggleAddPlates}
            className="text-green-500 text-2xl"
          >
            X
          </button>
        </div>
        <div className="px-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 max-h-96 overflow-auto">
            {masCheckBox.map((item) => (
              <div key={item.id}>
                <label className="flex items-center">
                  <input className="w-6 h-6" type="checkbox" value={item.id} />
                  <img
                    className="ml-4 rounded-full"
                    width="40"
                    height="40"
                    src="https://picsum.photos/seed/picsum/800/700"
                  />
                  <p className="ml-2 text-sm">{item.title}</p>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12 pb-12">
          <button
            onClick={addItem}
            className="bg-green-500 text-sm text-center text-white px-4 py-3 w-72 rounded-md uppercase"
          >
            APPLY
          </button>
        </div>
      </div>
    </motion.div>
  );
}
