import React from "react";

export default function SectionKitchen() {
  return (
    <div className="container px-4 md:px-12 py-10 mx-auto">
      <h1 className="text-gray-900 font-bold text-2xl">Kitchen</h1>
      <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-7 mt-4">
        <div className="relative main_color h-full pl-10 rounded-xl">
          <h4 className="absolute left-0 top-0">1</h4>
          <div className="flex bg-white px-4 py-4 rounded-xl">
            <div className="flex flex-col items-center justify-center w-24 bg-gray-300 py-3.5 rounded-xl">
              <p className="text-gray-800">Table</p>
              <p>34</p>
            </div>
            <div className="flex items-center ml-4 w-2/5">
              <ul className="text-gray-300 text-sm">
                <li>asdsa dads dsf</li>
                <li className="mt-1">sdf sdf sdf sdfds</li>
                <li className="mt-1">sdfsdfsf</li>
              </ul>
            </div>
            <div className="block ml-auto mr-0 pr-12">
              <ul className="text-gray-300">
                <li>1</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
