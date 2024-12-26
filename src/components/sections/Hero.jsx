import Image from "next/image";
import Layout from "../Layout";
import SchoolCourses from "../hero/SchoolCourses";
import SpokenEnglishCourses from "../hero/SpokenEnglishCourses";
import OfflineCenter from "../hero/OfflineCenter";

const Hero = () => {
  return (
    <section className="bg-black text-white py-10 bg-[url(https://cdn.10minuteschool.com/images/Background_Noise_1732776287934.png)] max-w-[1280px] mx-auto px-2 sm:px-5">
      <div>
        <Image
          src="https://cdn.10minuteschool.com/images/Frame_2147223622%402x_%281%29_1732776618989.png"
          alt="header title image"
          height={120}
          width={600}
          className="mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 mt-14">
        {/* school course */}
        <SchoolCourses />
        {/* Spoken english course */}
        <SpokenEnglishCourses />
      </div>
      {/* Offline location */}
      <OfflineCenter />
    </section>
  );
};

export default Hero;
