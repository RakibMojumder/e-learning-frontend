import Image from "next/image";
import onlineBatchData from "../../data/onlineBatchData.json";
import { Button } from "../ui/button";
import { LuChevronRight } from "react-icons/lu";

const OnlineBatch = () => {
  return (
    <section className="py-20 md:px-5 max-w-[1200px] mx-auto">
      <div className="mx-auto px-4 text-center max-w-[744px] md:mb-20">
        <h2 className="flex items-center justify-center gap-2 text-[#F0766A] pb-3 text-sm font-medium md:pb-6 md:text-lg">
          <span>ক্লাস ৬-১০</span>
        </h2>

        <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] text-[#111827]">
          বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?
        </h2>
        <div className="mb-7 text-sm font-normal leading-[22px] md:mb-4 md:text-lg md:leading-7 md:tracking-normal text-[#4B5563]">
          সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক
          পড়াশুনার অগ্রযাত্রা
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {onlineBatchData.map((data) => (
          <div key={data.id} className="flex-1 rounded-md border p-3">
            <div className="mb-6 aspect-video w-[100%] rounded-md relative before:absolute before:inset-0 before:bg-black/35">
              <Image
                src={data.thumbnail}
                alt="video thumbnail"
                height={450}
                width={450}
                className="w-full"
              />

              <Image
                src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=100&h=100"
                alt="video play image"
                height={100}
                width={100}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              />
            </div>

            <h3 className="text-xl font-semibold">{data.title}</h3>
            <p className="text-sm font-normal text-gray-500 md:text-base">
              {data.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button className="h-11">
          আপনার ক্লাস বেছে নিন <LuChevronRight size={24} />
        </Button>
      </div>
    </section>
  );
};

export default OnlineBatch;
