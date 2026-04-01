import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import { Bounce, ToastContainer } from "react-toastify";

const getProducts = async () => {
  const res = await fetch("/productsData.json");
  const data = await res.json();
  return data;
};
const productsPromise = getProducts();

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Banner />
      <Stats />
      <Products
        productsPromise={productsPromise}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Steps />
      <Pricing />
      <Cta />
      <Footer />

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
