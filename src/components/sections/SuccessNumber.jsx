import Layout from "../Layout";
import CountNumber from "../CountNumber";

const SuccessNumber = () => {
  return (
    <div className="bg-[url('https://cdn.10minuteschool.com/images/bg_01_1700634148023.webp')] bg-cover bg-center bg-no-repeat py-20 mb-32">
      <Layout>
        <div className="text-center">
          <h2 className="text-[21px] font-bold leading-[30px] text-white md:text-[44px] md:font-semibold md:leading-[56px]">
            ২০২২-২৪ শিক্ষাবর্ষে টেন মিনিট স্কুলের এডমিশন সাফল্য
          </h2>
          <p className="text-sm text-white md:text-[21px] md:leading-[30px]">
            তোমাদের সাফল্যই আমাদের অনুপ্রেরণা
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 py-7 md:grid-cols-3 md:gap-12">
          <CountNumber label="মোট শিক্ষার্থী" num={15548} />
          <CountNumber label="চান্সপ্রাপ্ত শিক্ষার্থী" num={1400} />
          <CountNumber label="টপ ১০০-তে চান্সপ্রাপ্ত শিক্ষার্থী" num={34} />
        </div>
      </Layout>
    </div>
  );
};

export default SuccessNumber;
