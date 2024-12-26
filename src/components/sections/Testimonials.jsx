import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import testimonials from "../../data/testimonials.json";
import Layout from "../Layout";
import QuoteIcon from "../../../public/assets/icons/QuoteIcon";

const Testimonials = () => {
  return (
    <section className="py-20">
      <Layout>
        <div className="mx-auto text-center max-w-[578px]">
          <h2 className="mb-2 text-2xl font-semibold leading-[32px] md:mb-4 md:text-[40px] md:leading-[56px] text-[#111827]">
            কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?
          </h2>
        </div>
        <Carousel className="w-full mt-10 md:mt-16">
          <CarouselContent className="-ml-1 gap-8">
            {testimonials.map((review) => (
              <CarouselItem key={review.id} className="pl-1 max-w-fit">
                <div className="relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px] flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[270px]">
                  <div
                    className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2 z-[2]"
                    id="quote"
                  >
                    <QuoteIcon />
                    <QuoteIcon />
                  </div>

                  <div className="text-[15px] font-medium leading-[26px] line-clamp-6 my-4">
                    {review.review}
                  </div>

                  <h3>Hasibur Rahman</h3>
                  <p className="text-sm text-gray-400 line-clamp-1">
                    Online Business Owner
                  </p>
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

export default Testimonials;
