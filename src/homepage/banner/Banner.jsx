import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import bannerIMG from "../../assets/banner.png";
import { FaDotCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-10 lg:gap-0 items-center mt-10 md:mt-14 lg:mt-28 text-center lg:text-left px-4 sm:px-6 lg:px-8">
      <div className="flex-1">
        <div className="bg-[#E1E7FF] w-fit py-2 px-5 rounded-full flex items-center gap-2 text-[#5e2ff7] mx-auto lg:mx-0">
          <FaDotCircle />
          <p className="bg-linear-to-r from-[#602FF7] to-[#9415FA] text-transparent bg-clip-text font-semibold">
            New: AI-Powered Tools Available
          </p>
        </div>
        <h1 className="text-5xl/tight sm:text-6xl/tight font-bold pt-4 pb-2">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-gray-600">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="space-x-3 pt-5">
          <button className="btn bg-linear-to-r from-[#602FF7] to-[#9415FA] text-white rounded-full text-base">
            Explore Products
          </button>
          <button className="btn bg-linear-to-r from-[#602FF7] to-[#9415FA] text-transparent bg-clip-text rounded-full border-[1.5px] border-[#892ff7] text-base">
            <IoPlayOutline className="text-[#602FF7] text-lg" />
            Watch Demo
          </button>
        </div>
      </div>
      <figure className="flex-1 flex items-end flex-col mx-3 md:mx-0">
        <img src={bannerIMG} alt="" />
      </figure>
    </div>
  );
};

export default Banner;
