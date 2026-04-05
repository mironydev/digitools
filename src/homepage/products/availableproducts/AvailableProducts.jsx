import React from "react";
import Card from "../../../ui/Card";

const AvailableProducts = ({ productsData }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-10 w-fit mx-auto">
      {productsData.map((product) => (
        <Card product={product} key={product.id}></Card>
      ))}
    </div>
  );
};

export default AvailableProducts;
