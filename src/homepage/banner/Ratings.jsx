import React from "react";

const Ratings = () => {
  return (
    <div className="bg-linear-to-r from-[#602FF7] to-[#9415FA] text-white text-center mt-10 md:mt-28">
      <div className="container mx-auto flex flex-col md:flex-row justify-center py-14">
        <div className="md:pr-20">
          <h3 className="text-5xl font-semibold">50K+</h3>
          <p className="text-gray-300">Active Users</p>
        </div>
        <div className="border-r-2 border-l-2 border-gray-400 md:px-20">
          <h3 className="text-5xl font-semibold">200+</h3>
          <p className="text-gray-300">Premium Tools</p>
        </div>
        <div className="md:pl-20">
          <h3 className="text-5xl font-semibold">4.9</h3>
          <p className="text-gray-300">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
