import Image from "next/image";
import schoolCoursesData from "../../data/schoolCourseData.json";
import { Button } from "../ui/button";
import { LuMoveRight } from "react-icons/lu";

const SchoolCourses = () => {
  return (
    <div className="text-white text-center bg-[linear-gradient(180deg,rgba(19,57,146,0.40)_0%,rgba(6,14,83,0.40)_100%)] rounded-[34px] border border-[#253A71] px-4 md:px-6 pt-10 pb-4 md:pb-8 relative">
      <h2 className="absolute text-[#2B72FF] border border-[#2B72FF] inline-block rounded-full px-[20px] py-[4px] bg-[#15275D] mb-10 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10">
        অনলাইন কোর্স
      </h2>
      <h2 className="text-base md:text-2xl md:max-w-[360px] mb-4 mx-auto">
        অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
      </h2>

      <div className="overflow-x-hidden">
        <div className="grid grid-cols-4 gap-4 mt-5 min-w-max">
          {schoolCoursesData.map((course) => (
            <div
              key={course.id}
              className="group flex space-y-2 w-full backdrop-blur-md md:h-[129px] min-w-32 cursor-pointer flex-col items-center justify-between rounded-2xl text-white bg-white/10 px-2 py-5 transition-all duration-300"
            >
              <Image
                src={course.image}
                alt="course image"
                height={65}
                width={65}
                className="mx-auto"
              />
              <p>{course.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Button variant="link" className="mt-5 text-base">
        ফ্রি ক্লাস বুক করুন
        <LuMoveRight />
      </Button>
    </div>
  );
};

export default SchoolCourses;
