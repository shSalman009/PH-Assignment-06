import React, { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

export default function Products() {
  const [selectedTab, setSelectedTab] = useState("cart");
  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold">Premium Digital Tools</h1>
          <p className="py-4 text-base text-gray-500 lg:max-w-lg text-center">
            Choose from our curated collection of premium digital products
            designedto boost your productivity and creativity.
          </p>

          <div className="p-0.5 shadow-sm rounded-full">
            <button
              onClick={() => handleSelectTab("products")}
              className={
                selectedTab === "products"
                  ? "btn btn-primary-custom"
                  : "btn rounded-full border-none bg-transparent"
              }
            >
              Products
            </button>
            <button
              onClick={() => handleSelectTab("cart")}
              className={` ${
                selectedTab === "cart"
                  ? "btn btn-primary-custom"
                  : "btn rounded-full border-none bg-transparent"
              }`}
            >
              Cart
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {selectedTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
              <Product key={id} />
            ))}
          </div>
        ) : (
          <Cart />
        )}
      </div>
    </div>
  );
}
