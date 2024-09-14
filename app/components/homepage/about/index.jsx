// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center bg-gray-900 text-white py-12 lg:py-24 relative"
    >
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-2xl font-semibold rounded-md">
          ABOUT ME
        </span>
        <span className="h-48 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-4 lg:px-12 max-w-6xl mx-auto">
        <div className="order-2 lg:order-1 flex flex-col justify-center lg:justify-start">
          <p className="font-bold mb-4 text-[#16f2b3] text-3xl lg:text-4xl">
            Who am I?
          </p>
          <p className="text-gray-300 text-justify text-base lg:text-2xl leading-relaxed">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={300}
            height={300}
            alt="Profile Picture"
            className="rounded-full transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
