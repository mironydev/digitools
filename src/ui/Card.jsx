import React, { useState } from "react";
import { toast } from "react-toastify";

const Card = ({ product, selectedProducts, setSelectedProducts }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleIsSelected = () => {
    setSelectedProducts([...selectedProducts, product]);
    setIsSelected(true);
    toast.success(`${name} added to cart!`);
  };

  const { name, description, price, period, tag, features, icon } = product;
  return (
    <div className="card rounded-3xl border-2 border-base-300 max-w-md">
      <div className="card-body relative">
        <div className="text-right absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full ${
              tag === "Best Seller"
                ? "bg-[#FEF3C6] text-[#BB4D00] font-medium"
                : tag === "New"
                  ? "bg-[#DBFCE7] text-[#0A883E] font-medium"
                  : tag === "Popular"
                    ? "bg-[#E1E7FF] text-purple-700 font-medium"
                    : "bg-gray-400"
            }`}
          >
            {tag}
          </span>
        </div>
        <img src={icon} alt="" className="w-fit  bg-base-200 p-2 rounded-2xl" />
        <h2 className="text-3xl font-bold">{name}</h2>

        <p className="text-gray-500">{description}</p>
        <p>
          <span className="font-bold text-xl">${price}</span>/{period}
        </p>
        <ul className="mt-3 flex flex-col gap-2 text-xs">
          {features.map((feature, index) => (
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
          <button
            onClick={handleIsSelected}
            disabled={isSelected}
            className="btn bg-linear-to-r from-[#602FF7] to-[#9415FA] text-white rounded-full w-full disabled:opacity-50"
          >
            {isSelected ? "Added to cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
