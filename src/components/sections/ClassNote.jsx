import Image from "next/image";
import React from "react";
import Layout from "../Layout";
import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";

const ClassNote = () => {
  return (
    <section className="pb-20 max-w-[1200px] mx-auto px-5">
      <div className="grid grid-cols-1 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#050505] to-[#06081B] md:grid-cols-2 p-5 md:px-10">
        <div className="flex flex-col items-center justify-center flex-1 w-full section-content md:items-start">
          <h2 className="mb-4 text-center text-[21px] font-[600] leading-[30px] text-white md:text-left md:text-[32px] md:leading-[48px]">
            সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?
          </h2>
          <div className="w-full text-center px-6 md:max-w-max md:px-0">
            <Button className="h-11 w-full sm:w-auto">
              <FiDownload /> ফ্রি ডাউনলোড করুন
            </Button>
          </div>
        </div>
        <div className="flex justify-center section-image md:justify-end mt-5 md:mt-0">
          <div className="w-full max-w-[250px] md:max-w-[356px] duration-300 ease-in-out">
            <Image
              alt="svg"
              width={356}
              height={341}
              src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/image_pdf_1685354763931.png?w=356&h=341"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassNote;
