import { IoCheckmarkCircle } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Layout from "../Layout";
import skillCourses from "../../data/skillsCourseData.json";
import skillCourseCategory from "../../data/skillCourseCategoryData.json";
import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";

const SkillsCourse = () => {
  return (
    <section className="bg-black py-28 md:px-5">
      <Layout>
        <div className="mx-auto px-4 text-center max-w-[744px] text-white">
          <h2 className="flex items-center justify-center gap-2 pb-3 text-sm font-medium md:pb-6 md:text-lg">
            <span>স্কিলস</span>
          </h2>
          <div className=" mx-auto">
            <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] ">
              দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম
            </h2>
          </div>
          <div className="mb-7 text-sm font-normal leading-[22px] md:mb-4 md:text-lg md:leading-7 md:tracking-normal text-[#9CA3AF]">
            <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
              <li className="flex items-center gap-1 md:gap-4">
                <IoCheckmarkCircle size={24} className="text-[#6294F8]" />
                দেশসেরা শিক্ষক
              </li>
              <li className="flex items-center gap-1 md:gap-4">
                <IoCheckmarkCircle size={24} className="text-[#6294F8]" />৫
                লাখ+শিক্ষার্থী
              </li>
              <li className="flex items-center gap-1 md:gap-4">
                <IoCheckmarkCircle size={24} className="text-[#6294F8]" />
                ৭০+ অনলাইন কোর্স
              </li>
            </ul>
          </div>
        </div>

        {/* Skill course category */}
        <Carousel className="w-full mt-10 md:mt-16">
          <CarouselContent className="-ml-1 gap-4">
            {skillCourseCategory.map((course) => (
              <CarouselItem key={course.id} className="pl-1 max-w-fit">
                <div className="cursor-pointer snap-start rounded-xl border bg-[#111827] p-6 transition-all duration-300 hover:border-primary hover:bg-[#1c2741]  border-[#111827]">
                  <p className="mb-2 text-sm text-gray-300 whitespace-nowrap md:text-base">
                    {course.title}
                  </p>
                  <p className="text-xs text-gray-400 whitespace-nowrap md:text-sm">
                    {course.totalCourse} Courses
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Skill Courses */}
        <div>
          <Carousel className="w-full mt-7 md:mt-14">
            <CarouselContent className="-ml-1 gap-4">
              {skillCourses.map((course) => (
                <CarouselItem key={course.id} className="pl-1 max-w-fit">
                  <div className="bg-[#121220] my-0 flex h-full min-w-[200px] max-w-[200px] cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green md:min-w-[272px] md:rounded-[6px]">
                    <Image
                      alt={course.title}
                      width={272}
                      height={152}
                      src={course.image}
                    />
                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-[14px]">
                      <div>
                        <h2 className="mb-1 h-14 text-sm font-semibold line-clamp-2  md:text-lg text-white">
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Layout>
    </section>
  );
};

export default SkillsCourse;
