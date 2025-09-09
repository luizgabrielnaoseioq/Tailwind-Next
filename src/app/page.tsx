import React from "react";

export default function Home() {
  return (
    <div className="flex justify-between p-8 bg-slate-900 text-gray-300 h-screen">
      <h1 className="text-center text-5xl gap-3 font-bold flex before:bg-blue-500 before:w-1 before:h-12 before:flex">
        WellCome
      </h1>
      <div className="">
        <button className="bg-blue-400 rounded-md font-semibold ml-1 mt-3 px-2 py-1">
          Singin
        </button>
        <button className="bg-red-500 rounded-full font font-semibold mx-4 px-2 py-4 ">
          Circle
        </button>
      </div>
    </div>
  );
}
