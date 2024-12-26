import React from "react";
import Layout from "./Layout";
import Image from "next/image";
import Logo from "./navbar/Logo";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-20">
      <Layout>
        <div className="flex flex-col pt-12 md:flex-row  md:border-[#E4E4E4] ">
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start mx-lg:mb-7 mx-lg:mr-6">
            <Logo />
            <h3 className="mb-[14px] mt-5 text-base font-semibold md:font-medium">
              Download Our Mobile App
            </h3>
            <div className="flex">
              <div className="mr-4">
                <Image
                  src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png?w=156&h=49"
                  alt="google play icon"
                  height={50}
                  width={156}
                />
              </div>
              <div>
                <Image
                  src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png?w=156&h=49"
                  alt="ios store icon"
                  height={50}
                  width={156}
                />
              </div>
            </div>
          </div>
          <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none mx-lg:mx-0 mx-lg:border-b mx-lg:border-[#E4E4E4]">
            <div className="flex justify-center w-full max-w-sm">
              <div className="w-1/2 mr-4">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  Company
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li className="hover:text-primary cursor-pointer">
                    Career / Recruitment
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Join as a Teacher
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Join as an Affiliate
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Privacy policy
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Refund policy
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Terms & Conditions
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  Others
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li className="hover:text-primary cursor-pointer">Blog</li>
                  <li className="hover:text-primary cursor-pointer">
                    Book Store
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Free Notes & Guides
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Job Preparation Courses
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Verify Certificate
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Free Download
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full ml-0 md:ml-4">
            <div className="hidden md:block">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                Keep up with us at
              </h3>
              <p className="mb-4 text-base font-normal">
                Call:{" "}
                <span>
                  <a className="text-primary" href="tel:16910">
                    16910
                  </a>
                  (24x7)
                </span>
              </p>
              <p className="mb-4 text-base font-normal">
                Whatsapp:{" "}
                <span>
                  <a
                    className="text-primary"
                    href="https://api.whatsapp.com/send?phone=+8801896016252&amp;text=I need your assistance"
                  >
                    +8801896016252
                  </a>
                  (24x7)
                </span>
              </p>
              <p className="mb-4 text-base font-normal">
                Outside Bangladesh:{" "}
                <span>
                  <a className="text-primary" href="tel:+8809610916910">
                    +880 9610916910
                  </a>
                </span>
              </p>
              <p className="mb-2 text-base font-normal">
                Email Us:{" "}
                <span className="text-primary">support@10minuteschool.com</span>
              </p>
            </div>
            <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
              <FaFacebook size={30} />
              <FaInstagramSquare size={30} />
              <FaLinkedin size={30} />
              <FaYoutubeSquare size={30} />
              <FaTiktok size={30} />
            </div>
          </div>
        </div>
        <div className="pb-5 text-center">
          <p className="text-xs font-normal text-gray-600 md:text-sm">
            স্বত্ব © ২০১৫ - ২০২৪ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত{" "}
          </p>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
