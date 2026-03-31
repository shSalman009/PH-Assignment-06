import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <Products />
    </>
  );
}

export default App;
