import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer>
      <Layout>
        <div className="flex flex-col pt-12 md:flex-row  md:border-[#E4E4E4] ">
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start mx-lg:mb-7 mx-lg:mr-6">
            <a className="mb-4" href="/">
              <div className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out">
                image
              </div>
            </a>
            <h3 className="mb-[14px] text-base font-semibold md:font-medium">
              ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
            </h3>
            <div className="flex">
              <div className="mr-4">
                <a href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool">
                  <div className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out">
                    image
                  </div>
                </a>
              </div>
              <div>
                <a href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
                  <div className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out">
                    image
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none mx-lg:mx-0 mx-lg:border-b mx-lg:border-[#E4E4E4]">
            <div className="flex justify-center w-full max-w-sm">
              <div className="w-1/2 mr-4">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  কোম্পানি
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <a
                      href="https://app.10minuteschool.com/careers"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      শিক্ষক হিসাবে যোগ দিন
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://affiliation.10minuteschool.com/"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      অ্যাফিলিয়েট হিসাবে যোগ দিন
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.10minuteschool.com/privacy-policy"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      প্রাইভেসি পলিসি
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.10minuteschool.com/refund-policy"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      রিফান্ড পলিসি
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.10minuteschool.com/terms-and-conditions"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      ব্যবহারকারীর শর্তাবলি
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  অন্যান্য
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <a
                      href="https://blog.10minuteschool.com/"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base "
                    >
                      ব্লগ
                    </a>
                  </li>
                  <li>
                    <a
                      href="/store/all"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base "
                    >
                      বুক স্টোর
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://10minuteschool.com/content"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base "
                    >
                      ফ্রি নোটস ও গাইড
                    </a>
                  </li>
                  <li>
                    <a
                      href="/jobs-prep"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base "
                    >
                      চাকরি প্রস্তুতি কোর্সসমূহ
                    </a>
                  </li>
                  <li>
                    <a
                      href="/certificate"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base "
                    >
                      সার্টিফিকেট ভেরিফাই করুন
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resource"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base "
                    >
                      ফ্রি ডাউনলোড
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full ml-0 md:ml-4">
            <div className="hidden md:block">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                আমাদের যোগাযোগ মাধ্যম
              </h3>
              <p className="mb-4 text-base font-normal">
                কল করুন{" "}
                <span>
                  <a className="text-primary" href="tel:16910">
                    16910
                  </a>
                  (24x7)
                </span>
              </p>
              <p className="mb-4 text-base font-normal">
                হোয়াটসঅ্যাপ{" "}
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
                দেশের বাহির থেকে{" "}
                <span>
                  <a className="text-primary" href="tel:+8809610916910">
                    +880 9610916910
                  </a>
                </span>
              </p>
              <p className="mb-2 text-base font-normal">
                ইমেইল{" "}
                <span className="text-primary">support@10minuteschool.com</span>
              </p>
            </div>
            <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
              <div>
                <a
                  href="https://www.facebook.com/10minuteschool/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out">
                    image
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/10ms_insta/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out">
                    image
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/10ms/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out">
                    image
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out">
                    image
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="https://www.tiktok.com/@10minuteschool?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out">
                    image
                  </div>
                </a>
              </div>
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
