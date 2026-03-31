import { MdCheck } from "react-icons/md";

export default function Product({ product, cartItems, setCartItems }) {
  const handleAddToCart = () => {
    const isAlreadyInCart = cartItems.find((item) => item.id === product.id);

    if (!isAlreadyInCart) {
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  const tagColors = {
    popular: "bg-purple-600/20 text-purple-600",
    "best-seller": "bg-yellow-600/20 text-yellow-600",
    new: "bg-green-600/20 text-green-600",
  };

  return (
    <div className="card bg-base-100 border-2 border-gray-100 rounded-xl">
      <div className="card-body p-3">
        <div className="flex justify-between">
          <div className="w-14 h-14 p-2 border border-gray-200 rounded-full grid place-items-center mb-2 self-end mt-4">
            <img className="max-w-full" src={product.icon} alt="Premium Icon" />
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
        <ul className="mt-4 flex flex-col gap-2 text-base">
          {product.features.map((feature, index) => (
            <li key={index}>
              <MdCheck className="size-5 me-2 inline-block text-success" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className="btn btn-primary-custom py-6 btn-block mt-auto"
          onClick={handleAddToCart}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
