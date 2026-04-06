import React, { use, useState, useEffect } from "react";
import SelectedProducts from "./selectedproducts/SelectedProducts";
import AvailableProducts from "./availableproducts/AvailableProducts";

const Products = ({ productsPromise, setCartCount }) => {
  const productsData = use(productsPromise);

  const [isActive, setIsActive] = useState("products");

  const handleIsActive = (active) => {
    setIsActive(active);
  };

  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    setCartCount(selectedProducts.length);
  }, [selectedProducts, setCartCount]);

  return (
    <div className="container mx-auto mt-28">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-gray-700 pt-2 pb-4">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="border-2 border-stone-200 w-fit mx-auto rounded-full relative">
          <div
            className={`absolute top-0 bottom-0 rounded-full bg-linear-to-r from-[#602FF7] to-[#9415FA] transition-all duration-200 ${
              isActive === "products" ? "left-0 right-1/2" : "left-1/2 right-0"
            }`}
          />
          <button
            onClick={() => handleIsActive("products")}
            className={`relative z-10 py-2 px-6 cursor-pointer rounded-full transition-colors duration-200 font-semibold ${
              isActive === "products" ? "text-white" : ""
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleIsActive("cart")}
            className={`relative z-10 py-2 px-6 cursor-pointer rounded-full transition-colors duration-200 font-semibold ${
              isActive === "cart" ? "text-white" : ""
            }`}
          >
            Cart ({selectedProducts.length})
          </button>
        </div>
      </div>

      {isActive === "products" && (
        <AvailableProducts
          productsData={productsData}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      )}
      {isActive === "cart" && (
        <SelectedProducts
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      )}
    </div>
  );
};

export default Products;
