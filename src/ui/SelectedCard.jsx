import React from "react";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ product, handleProductDelete }) => {
  const { name, price, icon } = product;
  return (
    <div className="flex bg-base-200 justify-between items-center p-5 rounded-xl">
      <div className="flex items-center gap-5">
        <img src={icon} alt="" className="w-fit bg-base-100 p-2 rounded-2xl" />
        <div>
          <p className="font-medium text-lg">{name}</p>
          <p className="font-medium text-stone-500">${price}</p>
        </div>
      </div>
      <button
        onClick={() => handleProductDelete(product)}
        className="btn text-red-600 text-xl px-3"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedCard;
