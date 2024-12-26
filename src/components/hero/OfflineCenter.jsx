import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";

const locationsImage = [
  "https://cdn.10minuteschool.com/images/SEJ_Thumbnails_1x1_%281%29_1732778436068.png?w=94&h=94",
  "https://cdn.10minuteschool.com/images/IELTS_Thumbnails_1732778416993.png?w=94&h=94",
  "https://cdn.10minuteschool.com/images/English_Foundation_Image_1732778452607.png?w=94&h=94",
];

const OfflineCenter = () => {
  return (
    <div className="relative bg-[linear-gradient(180deg,rgba(123,21,21,0.40)_0%,rgba(59,6,6,0.40)_100%)] rounded-[34px] border border-[#592327] text-center px-2 md:px-6 pt-10 pb-8 mt-28">
      <h2 className="absolute text-[#E64040] border border-[#E64040] inline-block rounded-full px-[20px] py-[6px] bg-[#441818] mb-10 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        অফলাইন সেন্টার
      </h2>

      <h3 className="md:text-2xl max-w-[470px] mb-4 mx-auto">
        অনলাইনে ৫ লক্ষাধিক শিক্ষার্থীকে ইংরেজি শিখিয়ে আমরা এখন অফলাইনে
      </h3>

      <ul className="flex flex-nowrap items-center gap-2 md:justify-center mb-6 overflow-x-auto scrollbar pb-2">
        <div className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center">
          <span className="bg-white/5 p-2 rounded-full inline-block">
            <HiOutlineLocationMarker />
          </span>
          <span className="whitespace-nowrap">উত্তরা</span>
        </div>
        <div className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center">
          <span className="bg-white/5 p-2 rounded-full inline-block">
            <HiOutlineLocationMarker />
          </span>
          <span className="whitespace-nowrap">পান্থপথ</span>
        </div>
        <p className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center">
          <span className="bg-white/5 p-2 rounded-full inline-block">
            <HiOutlineLocationMarker />
          </span>
          <span className="whitespace-nowrap">মিরপুর</span>
        </p>
        <div className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center">
          <span className="bg-white/5 p-2 rounded-full inline-block">
            <HiOutlineLocationMarker />
          </span>
          <span className="whitespace-nowrap">মগবাজার</span>
        </div>

        <div className="px-4 py-2 rounded-lg bg-white/5 flex items-center gap-2 text-sm snap-center">
          <span className="bg-white/5 p-2 rounded-full inline-block">
            <HiOutlineLocationMarker />
          </span>
          <span className="whitespace-nowrap">চকবাজার, চট্টগ্রাম</span>
        </div>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {locationsImage.map((image) => (
          <div
            key={image}
            className="flex flex-1 gap-3 items-center rounded-2xl px-4 py-3 backdrop-blur bg-white/10"
          >
            <Image
              alt="image"
              className="rounded-lg"
              width={100}
              height={140}
              src={image}
            />

            <div className="flex-1 text-left">
              <span className="text-[#EEA513] text-xs">ভর্তি চলছে .....</span>
              <h4 className="text-sm mb-1">Spoken English Junior</h4>
              <p className="text-gray-400 text-xs">
                ৪র্থ-১০ম শ্রেণির শিক্ষার্থীদের জন্য
              </p>
            </div>

            <FaChevronRight size={16} className="text-neutral-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfflineCenter;
