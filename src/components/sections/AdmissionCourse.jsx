import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import admissionCourseData from "../../data/admissionCourseData.json";
import Layout from "../Layout";
import { LuMoveRight } from "react-icons/lu";

const AdmissionCourse = () => {
  return (
    <section className="py-28 md:px-5">
      <Layout>
        <div className="mx-auto px-4 text-center">
          <h2 className="flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-6 md:text-lg">
            <span>ভর্তি পরীক্ষা</span>
          </h2>
          <div className=" mx-auto">
            <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] text-[#111827]">
              স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি{" "}
            </h2>
          </div>
          <div className="mb-7 text-sm font-normal leading-[22px] md:mb-4 md:text-lg md:leading-7 md:tracking-normal text-[#4B5563]">
            ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের
            পথ এখানেই।
          </div>
        </div>

        <Carousel className="w-full mt-7 md:mt-14">
          <CarouselContent className="-ml-1 gap-4">
            {admissionCourseData.map((course) => (
              <CarouselItem key={course.id} className="pl-1 max-w-fit">
                <div className="my-0 flex h-full min-w-[200px] max-w-[200px] cursor-pointer flex-col overflow-hidden rounded transition-colors border hover:border-primary md:min-w-[272px] md:rounded-[6px]">
                  <Image
                    alt={course.title}
                    width={272}
                    height={152}
                    src={course.image}
                  />
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                    <div>
                      <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg">
                        {course.title}
                      </h2>
                      <h3 className="max-h-[50px] overflow-hidden truncate text-xs text-[#6B7280] md:text-sm">
                        {course.instructor}
                      </h3>
                    </div>
                    <div>
                      <p className="mt-2 flex items-center gap-1 text-sm text-[#1DAB55]">
                        <span>বিস্তারিত</span>
                        <LuMoveRight />
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-neutral-500 hover:bg-neutral-500" />
          <CarouselNext className="bg-neutral-500 hover:bg-neutral-500" />
        </Carousel>
      </Layout>
    </section>
  );
};

export default AdmissionCourse;
