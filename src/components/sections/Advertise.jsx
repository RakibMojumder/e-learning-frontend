"use client";

import Image from "next/image";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Advertise = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="relative">
          <Image
            src="https://cdn.10minuteschool.com/images/web_banner_1733505715137.jpg?w=1800"
            alt="advertise image"
            width={1800}
            height={100}
            className="hidden sm:block w-full"
          />
          <Image
            src="https://cdn.10minuteschool.com/images/mobile_banner_1733505702239.jpg?w=768"
            alt="advertise image"
            width={768}
            height={100}
            className="sm:hidden w-full"
          />
          <RxCross2
            onClick={() => setShow(false)}
            size={22}
            className="absolute top-2 right-1 z-10 text-white cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

export default Advertise;
