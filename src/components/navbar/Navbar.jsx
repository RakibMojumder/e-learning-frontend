"use client";

import {
  classItems,
  englishCenter,
  navItems,
  skillsItems,
} from "@/data/navItems";
import { useState } from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { BsTelephoneFill } from "react-icons/bs";
import NavItems from "./NavItems";
import { Button } from "../ui/button";
import EnLanguageIcon from "../../../public/assets/icons/EnLanguageIcon";
import { RiMenuUnfoldLine } from "react-icons/ri";
import MobileNavItems from "./MobileNavItems";
import SearchIcon from "../../../public/assets/icons/SearchIcon";
import { LuPhone } from "react-icons/lu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showItems, setShowItems] = useState("");

  return (
    <div className="border-b sticky top-0 bg-white">
      <div
        onMouseLeave={() => setShowItems("")}
        className="flex items-center justify-between gap-x-3 sm:gap-x-6 xl:gap-x-3 max-w-[1440px] mx-auto px-4 md:px-7 py-3"
      >
        <div className="flex items-center gap-x-3">
          <RiMenuUnfoldLine
            onClick={() => setOpen((prev) => !prev)}
            size={26}
            className="xl:hidden cursor-pointer"
          />
          <Logo />
        </div>
        <Searchbar />
        <ul className="hidden xl:flex items-center gap-x-1.5">
          <NavItems
            showItems={showItems}
            setShowItems={setShowItems}
            itemName="Class 6-12"
            items={classItems}
          />

          <NavItems
            showItems={showItems}
            setShowItems={setShowItems}
            itemName="Skills"
            items={skillsItems}
          />

          <li className="px-2.5 py-1.5 text-neutral-600 text-[15px] font-medium cursor-pointer hover:text-primary">
            <span>Admission</span>
          </li>
          <li className="px-2.5 py-1.5 text-neutral-600 text-[15px] font-medium cursor-pointer hover:text-primary">
            <span>Online Batch</span>
          </li>

          <NavItems
            showItems={showItems}
            setShowItems={setShowItems}
            itemName="English Centre"
            items={englishCenter}
          />

          <NavItems
            showItems={showItems}
            setShowItems={setShowItems}
            itemName="More"
            items={navItems}
          />
        </ul>

        <div className="flex items-center gap-x-5 sm:gap-x-6">
          <span className="hidden sm:flex cursor-pointer items-center gap-1 rounded border px-2 py-[2px] hover:bg-slate-50">
            <EnLanguageIcon />
            <span>বাং</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-primary">
            <BsTelephoneFill />
            16910
          </span>
          <SearchIcon className="sm:hidden" />
          <LuPhone size={20} className="sm:hidden" />
          <Button>Login</Button>
        </div>
      </div>

      {open && <MobileNavItems />}
    </div>
  );
};

export default Navbar;
