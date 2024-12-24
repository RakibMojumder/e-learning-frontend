"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";

const NavItems = ({ showItems, setShowItems, itemName, items, className }) => {
  return (
    <li
      onMouseOver={() => setShowItems(itemName)}
      className="px-2.5 py-1.5 relative cursor-pointer"
    >
      <div className="text-muted flex items-center gap-x-2 text-sm font-medium hover:text-primary">
        <span>{itemName}</span>
        <FaChevronDown />
      </div>
      <div
        className={cn(
          "absolute top-8 -left-1/2 min-w-max bg-white py-3 px-4 space-y-1.5 square-shadow z-50 text-muted text-[15px] font-medium",
          showItems === itemName ? "block" : "hidden",
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
    </li>
  );
};

export default NavItems;
