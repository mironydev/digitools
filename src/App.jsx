import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./navbar/NavBar";
import Banner from "./homepage/banner/Banner";
import Ratings from "./homepage/banner/Ratings";
import Products from "./homepage/products/Products";
import { Suspense } from "react";
import GuideCard from "./homepage/guidecard/GuideCard";
import Pricing from "./homepage/pricing/Pricing";

const fetchProducts = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};

const productsPromise = fetchProducts();

const fetchPricing = async () => {
  const res = await fetch("/pricingData.json");
  return res.json();
};

const pricingPromise = fetchPricing();

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Ratings></Ratings>
      <Suspense
        fallback={
          <div className="flex justify-center h-screen items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Products productsPromise={productsPromise}></Products>
      </Suspense>
      <GuideCard></GuideCard>
      <Suspense
        fallback={
          <div className="flex justify-center h-screen items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
