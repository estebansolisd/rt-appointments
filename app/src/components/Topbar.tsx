"use client";
import clsx from "clsx";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Search from "../assets/Search.svg";
import AddDealModal from "./AddDealModal";

const getPageName = (path: string) => {
  const name = path.replace("/", "");

  if (!name) {
    return "Dashboard";
  }

  return name[0].toUpperCase() + name.slice(1);
};

const TopBar = () => {
  const path = usePathname();
  const pageName = getPageName(path);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    
      <div className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-xl font-bold">{pageName ?? "Untitled"}</div>
        <div className="flex space-x-4 items-center">
          <button
            aria-label="Add new items"
            className={clsx(
              "bg-purple-500 text-white py-2 px-4 rounded-lg items-center space-x-2",
            )}
            onClick={e => setIsOpen(prev => !prev)}
          >
            <span>Add New {   pageName === "Deals" ? "Deal" : ""} + </span>
          </button>
          <button className="rounded-full items-center justify-center">
            <Image src={Search} priority alt="Search" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
      <AddDealModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default TopBar;
