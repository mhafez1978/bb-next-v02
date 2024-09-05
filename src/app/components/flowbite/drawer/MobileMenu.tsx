"use client";
import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

const MobileMenu: React.FC<{}> = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-end items-center">
        <button
          title="mobile-menu"
          className="h-[50px] cursor-pointer border-2 border-red-500"
          data-drawer-target="drawer-right"
          data-drawer-toggle="drawer-right"
          data-drawer-placement="right"
        >
          <RiMenu3Fill size={32} />
        </button>
      </div>

      <div
        id="drawer-right"
        className="fixed top-0 right-0 z-40 w-[100vw] h-[100vh] p-4 overflow-y-auto transition-transform translate-x-full bg-[#090E34] text-white dark:bg-gray-800"
        tabIndex={-1}
      >
        <div className="w-full flex">
          <div className="container mx-auto flex flex-row justify-between">
            <h2 className="text-xl">Blooming Brands</h2>
            <button type="button" data-drawer-hide="drawer-right">
              <span className="sr-only">Close menu</span>
              <span className="text-3xl">X</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
