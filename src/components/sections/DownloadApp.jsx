import Image from "next/image";
import Layout from "../Layout";
import GradientBg from "../GradientBg";
import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadApp = () => {
  return (
    <div>
      <Layout>
        <div className="bg-black pt-8 md:pt-0 px-5 rounded-[20px] flex flex-col md:flex-row relative items-center overflow-hidden">
          <GradientBg />

          <div className="md:w-1/2 flex md:px-[72px] flex-col md:items-start items-center justify-center relative z-[1]">
            <h2 className="text-white text-center md:text-left font-semibold text-xl lg:text-[34px] pb-5 md:pb-12 leading-8 lg:leading-[44px]">
              ডাউনলোড করুন আমাদের মোবাইল অ্যাপ, শেখা শুরু করুন আজ থেকেই
            </h2>

            <Button className="h-11">
              <FiDownload /> ফ্রি ডাউনলোড করুন
            </Button>
          </div>
          <div className="section-image md:w-1/2 md:pl-12 z-[1]">
            <Image
              src="https://cdn.10minuteschool.com/images/download_app_1668328988106.png?w=503&h=428"
              alt="image"
              height={430}
              width={500}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DownloadApp;
