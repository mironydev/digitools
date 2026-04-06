import React, { use } from "react";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div className="container mx-auto mt-28">
      <div className="text-center pb-4">
        <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 pt-2 pb-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl gap-10 mx-auto">
        {pricingData.map((pricing) => (
          <div
            className={`card rounded-xl shadow-md bg-base-200 ${pricing.name === "Pro" ? "bg-linear-to-r from-[#602FF7] to-[#9415FA] text-white" : ""} max-w-md`}
          >
            <div className="relative card-body">
              {pricing.name === "Pro" ? (
                <span className="absolute -top-4 right-1/2 translate-x-1/2 text-xs py-2 px-4 rounded-full bg-[#FEF3C6] text-[#BB4D00] font-medium">
                  Most Popular
                </span>
              ) : (
                ""
              )}
              <h2 className="text-2xl font-bold">{pricing.name}</h2>

              <p
                className={`${pricing.name === "Pro" ? "text-white" : "text-gray-500"}`}
              >
                {pricing.description}
              </p>
              <p>
                <span className="font-bold text-3xl">${pricing.price}</span>/
                {pricing.period}
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-xs">
                {pricing.features.map((feature, index) => (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <div className="bg-white rounded-full ">
                  <button
                    className={`btn shadow-none ${pricing.name === "Pro" ? "bg-linear-to-r from-[#4000ff] to-[#d000ff] text-transparent bg-clip-text" : "bg-linear-to-r from-[#602FF7] to-[#9415FA] text-white"} rounded-full w-full`}
                  >
                    {pricing["btn-content"]}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
