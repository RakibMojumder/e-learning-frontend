import Image from "next/image";
import schoolBatchData from "../../data/schoolBatchData.json";

const SchoolBatch = () => {
  return (
    <div className="bg-[#F4F7FD] py-28 px-5">
      <div className="mx-auto px-4 text-center max-w-[744px]">
        <h2 className="flex items-center justify-center gap-2 text-[##183CAF] pb-3 text-sm font-medium md:pb-6 md:text-lg">
          <span>SSC & HSC</span>
        </h2>
        <div className=" mx-auto">
          <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[44px] md:leading-[56px] text-[#111827]">
            SSC ও HSC শিক্ষার্থীদের জন্য
          </h2>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto overflow-auto scrollbar mt-5 md:mt-10">
        <div className="flex flex-col md:flex-row items-center gap-x-5 md:flex-nowrap min-w-fit">
          {schoolBatchData.map((course) => (
            <div
              key={course.id}
              className="my-0 mb-4 flex h-full w-full cursor-pointer flex-row gap-4 rounded-none border-b border-[#E5E7EB] hover:border-primary pb-4 transition-colors duration-200 md:max-w-[200px] md:flex-col sm:rounded sm:border sm:pb-0 md:min-w-[272px] md:hover:border-green xs:border-dashed"
            >
              <div className="w-auto min-w-[100px] max-w-[144px] rounded sm:max-w-full sm:rounded-b-none">
                <Image
                  alt={course.title}
                  width={272}
                  height={152}
                  src={course.image}
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-between rounded-bl-[4px] rounded-br-[4px] p-0 sm:p-[14px]">
                <div>
                  <h2 className="mb-1 text-sm font-semibold line-clamp-2 md:text-lg">
                    {course.title}
                  </h2>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-[600] text-[#1DAB55] md:text-lg">
                    ৳ {course.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolBatch;
