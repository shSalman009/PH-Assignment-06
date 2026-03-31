import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";

const getProducts = async () => {
  const res = await fetch("/productsData.json");
  const data = await res.json();
  return data;
};
const productsPromise = getProducts();

function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
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
    </>
  );
}

export default App;
