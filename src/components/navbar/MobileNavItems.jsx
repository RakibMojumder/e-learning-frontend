"use client";

import {
  classItems,
  englishCenter,
  navItems,
  skillsItems,
} from "@/data/navItems";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const MobileNavItems = () => {
  return (
    <div className="fixed top-[55px] left-0 h-[calc(100vh_-_55px)] w-full bg-white px-1 md:px-4 py-3 overflow-y-auto xl:hidden">
      <ul className="space-y-1.5">
        <Item itemName="Class 6-12" items={classItems} />
        <Item itemName="Skills" items={skillsItems} />
        <li className="py-2 px-4 font-medium hover:bg-neutral-100 duration-300 cursor-pointer">
          Admission
        </li>
        <hr />
        <li className="py-2 px-4 font-medium hover:bg-neutral-100 duration-300 cursor-pointer">
          Online Batch
        </li>
        <Item itemName="English Center" items={englishCenter} />
        <hr />

        {navItems.map((item, index) => (
          <li
            key={index + 1 * 5}
            className="py-2 px-4 font-medium hover:bg-neutral-100 duration-300 cursor-pointer"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Item = ({ itemName, items, className }) => {
  const [showItems, setShowItems] = useState(false);

  return (
    <li className="px-2.5 relative">
      <div
        onClick={() => setShowItems((prev) => !prev)}
        className="flex items-center gap-x-2 p-2 font-medium hover:bg-neutral-100 duration-300 cursor-pointer"
      >
        <span>{itemName}</span>
        <FaChevronDown />
      </div>

      {showItems && (
        <div
          className={cn(
            "min-w-max py-3 pl-2 space-y-1.5 text-[15px] font-medium",
            className
          )}
        >
          {items.map((item, index) => {
            const { name, icon, image } = item;
            const Icon = icon;

            return (
              <div
                key={index + name}
                className="flex items-center gap-x-3 p-2 hover:bg-neutral-100 duration-300"
              >
                {icon && <Icon />}
                {image && (
                  <Image
                    src={image}
                    alt="english center image"
                    height={100}
                    width={100}
                    className="size-5"
                  />
                )}
                <span>{name}</span>
              </div>
            );
          })}
        </div>
      )}
    </li>
  );
};

export default MobileNavItems;
