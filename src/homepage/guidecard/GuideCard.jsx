import React from "react";
import userIMG from "../../assets/user.png";
import packageIMG from "../../assets/package.png";
import rocketIMG from "../../assets/rocket.png";

const GuideCard = () => {
  return (
    <div className="bg-base-200 mt-10 md:mt-28 py-16">
      <div className="container mx-auto">
        <div className="text-center pb-4">
          <h2 className="text-4xl font-bold">Get Started in 3 Steps</h2>
          <p className="text-gray-600 pt-2 pb-4">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6 md:gap-14 text-center w-fit">
          <div className="max-w-sm relative bg-base-100 rounded-2xl border-2 border-base-300 px-5 py-18 flex flex-col items-center">
            <span className="absolute top-5 right-5 bg-red-400 rounded-full px-3.5 py-2 font-semibold text-white text-xs bg-linear-to-r from-[#602FF7] to-[#9415FA]">
              1
            </span>
            <img
              src={userIMG}
              alt=""
              className="bg-[#F2E8FE] rounded-full p-4"
            />
            <h4 className="font-semibold text-2xl pt-3 pb-2">Create Account</h4>
            <p className="text-gray-600">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="max-w-sm relative bg-base-100 rounded-2xl border-2 border-base-300 px-5 py-18 flex flex-col items-center">
            <span className="absolute top-5 right-5 bg-red-400 rounded-full px-3.25 py-2 font-semibold text-white text-xs bg-linear-to-r from-[#602FF7] to-[#9415FA]">
              2
            </span>
            <img
              src={packageIMG}
              alt=""
              className="bg-[#F2E8FE] rounded-full p-4"
            />
            <h4 className="font-semibold text-2xl pt-3 pb-2">
              Choose Products
            </h4>
            <p className="text-gray-600">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="max-w-sm relative bg-base-100 rounded-2xl border-2 border-base-300 px-5 py-18 flex flex-col items-center">
            <span className="absolute top-5 right-5 bg-red-400 rounded-full px-3.25 py-2 font-semibold text-white text-xs bg-linear-to-r from-[#602FF7] to-[#9415FA]">
              3
            </span>
            <img
              src={rocketIMG}
              alt=""
              className="bg-[#F2E8FE] rounded-full p-4"
            />
            <h4 className="font-semibold text-2xl pt-3 pb-2">Start Creating</h4>
            <p className="text-gray-600">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
