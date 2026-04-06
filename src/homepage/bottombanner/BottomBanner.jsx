import React from "react";

const BottomBanner = () => {
  return (
    <div className="bg-linear-to-r from-[#602FF7] to-[#9415FA] mt-28 py-24">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold">
          Ready to Transform Your Workflow?
        </h2>
        <p className="pt-3 pb-7">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex justify-center gap-3 pb-3">
          <div className="bg-white rounded-full ">
            <button
              className={`btn shadow-none bg-linear-to-r from-[#4000ff] to-[#d000ff] text-transparent bg-clip-text rounded-full text-base`}
            >
              Explore Products
            </button>
          </div>
          <button className="btn bg-transparent text-white rounded-full shadow-none border-2 text-base">
            View Pricing
          </button>
        </div>
        <p className="text-gray-300">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default BottomBanner;
