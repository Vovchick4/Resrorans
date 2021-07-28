import React from "react";

export default function AddSectionForm({
  visible,
  triggerToggleForm,
  triggerToggleAddPlates,
  isVisiblePlates,
}) {
  return (
    <div
      className="fixed top-0 left-0 jutify-center items-center w-full h-full bg-black bg-opacity-75 px-4"
      style={!isVisiblePlates ? { display: visible } : { display: "none" }}
    >
      <div className="block ml-auto mr-auto w-full max-w-4xl bg-white rounded-xl">
        <div className="flex">
          <div className="w-full md:w-3/5 px-12 py-8">
            <div className="flex items-center jutify-between w-full">
              <h1 className="text-gray-900 text-2xl font-bold">Add section</h1>
              <div className="block ml-auto mr-0">
                <button
                  onClick={triggerToggleForm}
                  className="text-green-500 text-2xl"
                >
                  X
                </button>
              </div>
            </div>
            <div className="mt-6">
              <select className="mb-4 px-2 py-2 bg-gray-200 w-full rounded-md">
                <option>Pizza</option>
                <option></option>
                <option></option>
              </select>
              <button
                onClick={triggerToggleAddPlates}
                className="bg-green-500 text-sm text-center text-white px-4 py-3 w-full rounded-md uppercase"
              >
                Create
              </button>
            </div>
          </div>
          <div className="hidden md:block w-4/5">
            <img
              className="bg-cover rounded-r-xl"
              src="https://picsum.photos/seed/picsum/800/700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
