import React, { use, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

export default function Products({ productsPromise, cartItems, setCartItems }) {
  const products = use(productsPromise);

  const [selectedTab, setSelectedTab] = useState("products");
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
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {selectedTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            ))}
          </div>
        ) : (
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        )}
      </div>
    </div>
  );
}
