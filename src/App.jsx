import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./navbar/NavBar";
import Banner from "./homepage/banner/Banner";
import Ratings from "./homepage/banner/Ratings";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Ratings></Ratings>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
