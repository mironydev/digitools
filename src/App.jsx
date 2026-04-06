import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./navbar/NavBar";
import Banner from "./homepage/banner/Banner";
import Ratings from "./homepage/banner/Ratings";
import Products from "./homepage/products/Products";
import { Suspense } from "react";

const fetchProducts = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const productsPromise = fetchProducts();

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

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
