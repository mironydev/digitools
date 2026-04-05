import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./navbar/NavBar";
import Banner from "./homepage/banner/Banner";
import Ratings from "./homepage/banner/Ratings";
import Products from "./homepage/products/Products";

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
      <Products productsPromise={productsPromise}></Products>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
