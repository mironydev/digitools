import React from "react";

const BottomBanner = () => {
  return (
    <div className="bg-linear-to-r from-[#602FF7] to-[#9415FA] mt-10 md:mt-28 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl/tight font-bold">
          Ready to Transform Your Workflow?
        </h2>
        <p className="pt-3 pb-7">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 py-3">
          <div className="bg-white rounded-full">
            <button
              className={`btn shadow-none bg-linear-to-r from-[#4000ff] to-[#d000ff] text-transparent bg-clip-text rounded-full text-base w-full`}
            >
              Explore Products
            </button>
          </div>
          <button className="btn bg-transparent text-white rounded-full shadow-none border-2 text-base">
            View Pricing
          </button>
        </div>
        <div className="text-gray-300 flex flex-col sm:flex-row justify-center gap-1 pt-4">
          <p>• 14-day free trial</p>
          <p>• No credit card required</p>
          <p>• Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
