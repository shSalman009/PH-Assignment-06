import { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";
import { toast } from "react-toastify";

export default function Product({ product, cartItems, setCartItems }) {
  const [isAlreadyInCart, setIsAlreadyInCart] = useState(false);

  const handleAddToCart = () => {
    if (!isAlreadyInCart) {
      setCartItems((prevItems) => [...prevItems, product]);
      toast.success("Product added to cart");
    } else {
      toast.error("Product already in Cart");
    }
  };

  useEffect(() => {
    const isInCart = cartItems.find((item) => item.id === product.id);
    setIsAlreadyInCart(!!isInCart);
  }, [cartItems]);

  const tagColors = {
    popular: "bg-purple-600/20 text-purple-600",
    "best-seller": "bg-yellow-600/20 text-yellow-600",
    new: "bg-green-600/20 text-green-600",
  };

  return (
    <div className="card bg-base-100 border-2 border-gray-100 rounded-xl">
      <div className="card-body p-4">
        <div className="flex justify-between">
          <div className="w-14 h-14 border border-gray-200 rounded-full grid place-items-center mb-2 self-end mt-4">
            <p className="text-3xl">{product.icon}</p>
          </div>
          <span
            className={`rounded-full px-3 py-1.5 text-sm self-start ${tagColors[product.tagType]}`}
          >
            {product.tagType}
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-base text-gray-500">{product.description}</p>

          <p>
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="text-xl text-gray-500 capitalize">
              / {product.period}
            </span>
          </p>
        </div>
        <ul className="my-4 flex flex-col gap-2 text-base">
          {product.features.map((feature, index) => (
            <li key={index}>
              <MdCheck className="size-5 me-2 inline-block text-success" />
              <span className="text-gray-500 font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`btn py-6 btn-block mt-auto ${isAlreadyInCart ? "btn-secondary-custom" : "btn-primary-custom"}`}
          onClick={handleAddToCart}
        >
          {isAlreadyInCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
