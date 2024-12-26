"use client";

import { englishToBangla } from "@/lib/utils";
import CountUp from "react-countup";

const CountNumber = ({ label, num }) => {
  return (
    <div className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#00000042] py-2 px-4 text-center text-white md:py-8 last:col-span-2 last:md:col-span-1">
      <h2 className="count text-2xl font-semibold md:mb-[14px] md:text-[56px] md:leading-[44px]">
        <CountUp
          end={num}
          duration={3}
          formattingFn={(value) => englishToBangla(Math.floor(value))}
        />
      </h2>
      <p className="text-sm font-medium leading-[30px] md:text-xl">{label}</p>
    </div>
  );
};

export default CountNumber;
