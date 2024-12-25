"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "https://cdn.10minuteschool.com/images/routine_1722246136916.svg",
  "https://cdn.10minuteschool.com/images/routine1_1722246290896.svg",
  "https://cdn.10minuteschool.com/images/routine2_1722246331227.svg",
  "https://cdn.10minuteschool.com/images/routine3_1722246356028.svg",
];

const AuthPageCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full mt-8">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index + image}>
              <Image
                src={image}
                alt="image"
                height={270}
                width={560}
                className="h-72"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-5 flex gap-x-2 justify-center">
        {[...Array(count)].map((_, index) => (
          <div
            key={index}
            className={`size-2 rounded-full ${
              current === index + 1
                ? "w-5 h-2 bg-primary"
                : "size-2 bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AuthPageCarousel;
