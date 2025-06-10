import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Carousel, {
  Slider,
  SliderContainer,
  SliderSnapDisplay,
} from "@/components/ui/carousel";
import PlaceholderImage from "@/components/common/placeholder-img";

export default function ProjectsSlider() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <Carousel options={OPTIONS} className="relative my-10">
        <SliderContainer className="gap-2 h-[300px] md:h-[380px] lg:h-[500px]">
          <Slider className="w-[80%] md:w-[50%]">
            <div className=" w-full rounded-xl">
              <PlaceholderImage />
            </div>
          </Slider>
          <Slider className="w-[80%] md:w-[50%]">
            <div className=" w-full rounded-xl">
              <PlaceholderImage />
            </div>
          </Slider>
          <Slider className="w-[80%] md:w-[50%]">
            <div className="bg-blue-500  h-full w-full rounded-xl"></div>
          </Slider>
          <Slider className="w-[80%] md:w-[50%]">
            <div className="bg-yellow-500  h-full w-full rounded-xl"></div>
          </Slider>
          <Slider className="w-[80%] md:w-[50%]">
            <div className="bg-orange-500  h-full w-full rounded-xl"></div>
          </Slider>
        </SliderContainer>
        <div className="absolute bottom-3 right-3 text-white rounded-lg w-20 h-12 grid place-content-center font-semibold border-2 z-10 dark:bg-black bg-white">
          <SliderSnapDisplay className="mix-blend-difference" />
        </div>
      </Carousel>
    </>
  );
}
