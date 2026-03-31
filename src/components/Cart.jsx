import { useState } from "react";
import image from "../assets/products/design-tool.png";
import { FiShoppingCart } from "react-icons/fi";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    // { id: 1, name: "AI Writing Pro", price: 29 },
    // { id: 2, name: "AI Writing Pro", price: 29 },
    // { id: 3, name: "AI Writing Pro", price: 29 },
  ]);

  return (
    <div className="bg-base-100 border-2 border-gray-100 rounded-xl mt-10 p-6">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-10">
          <FiShoppingCart className="size-12 text-gray-300" />
          <p className="text-center text-gray-500">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold">Your Cart</h2>
          {cartItems.map((item) => (
            <div className="flex bg-base-200 p-4 rounded-lg mt-4 items-center gap-4">
              <div className="w-12 h-12 p-2 border border-gray-200 rounded-full grid place-items-center">
                <img className="max-w-full" src={image} alt="Premium Icon" />
              </div>
              <div>
                <h4 className="text-base font-semibold">AI Writing Pro</h4>
                <p className="text-sm text-gray-500">$29</p>
              </div>
              <button className="ml-auto text-sm font-semibold text-red-500 hover:text-red-700 cursor-pointer">
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <p className="text-gray-500">Total:</p>
            <p className="text-lg font-semibold">$87</p>
          </div>
          <button className="btn btn-primary-custom py-6 btn-block mt-6">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
