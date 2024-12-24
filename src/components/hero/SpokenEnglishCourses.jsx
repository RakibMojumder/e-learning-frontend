import spokenEnglishCoursesData from "../../data/spokenEnglishCourseData.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { LuMoveRight } from "react-icons/lu";
import Image from "next/image";

const SpokenEnglishCourses = () => {
  return (
    <div className="text-white text-center bg-[linear-gradient(180deg,rgba(150,96,20,0.40)_0%,rgba(59,37,6,0.40)_100%)] rounded-[34px] border border-[#64523D] px-4 md:px-6 pt-10 pb-4 md:pb-8 relative">
      <h2 className="absolute text-[#F29D1F] border border-[#F29D1F] inline-block rounded-full px-[20px] py-[4px] bg-[#583112] mb-10 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        অনলাইন কোর্স
      </h2>
      <h2 className="text-base md:text-2xl md:max-w-[360px] mb-4 mx-auto">
        অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
      </h2>

      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {spokenEnglishCoursesData.map((course) => (
            <CarouselItem
              key={course.id}
              className="pl-1 basis-1/3 sm:basis-1/5 md:basis-1/3 lg:basis-1/5"
            >
              <Image
                src={course.image}
                width={100}
                height={130}
                alt="course image"
                className="rounded-md hover:shadow shadow-lg transition-all duration-300"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Button variant="link" className="mt-5 text-base">
        ৩০+ ফ্রি কোর্সে এনরোল হতে ক্লিক করুন
        <LuMoveRight />
      </Button>
    </div>
  );
};

export default SpokenEnglishCourses;
