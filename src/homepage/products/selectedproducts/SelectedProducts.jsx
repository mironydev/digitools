import React from "react";
import SelectedCard from "../../../ui/SelectedCard";

const SelectedProducts = ({ selectedProducts, setSelectedProducts }) => {
  const handleProductDelete = (product) => {
    const filterProducts = selectedProducts.filter(
      (includedProduct) => includedProduct.id !== product.id,
    );
    setSelectedProducts(filterProducts);
  };
  return (
    <div className="border-2 border-base-300 px-6 py-8   rounded-3xl  mt-6 max-w-5xl mx-auto">
      {selectedProducts.length === 0 ? (
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-semibold">Your cart is empty</h3>
          <p className="text-stone-500">Go to Products tab to add items</p>
        </div>
      ) : (
        <div className="space-y-5">
          <h3 className="font-bold text-xl">Your Cart</h3>
          {selectedProducts.map((product) => (
            <SelectedCard
              key={product.id}
              product={product}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
              handleProductDelete={handleProductDelete}
            />
          ))}
          <div className="flex justify-between">
            <p className="text-stone-500">Total:</p>
            <p className="font-bold">
              $
              {selectedProducts.reduce(
                (total, product) => total + product.price,
                0,
              )}
            </p>
          </div>
          <button className="btn bg-linear-to-r from-[#602FF7] to-[#9415FA] text-white rounded-full w-full">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedProducts;
