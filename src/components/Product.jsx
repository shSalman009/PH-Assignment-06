import image from "../assets/products/design-tool.png";
import { MdCheck } from "react-icons/md";

export default function Product() {
  return (
    <div className="card bg-base-100 border-2 border-gray-100 rounded-xl">
      <div className="card-body p-3">
        <div className="flex justify-between">
          <div className="w-14 h-14 p-2 border border-gray-200 rounded-full grid place-items-center mb-2 self-end mt-4">
            <img className="max-w-full" src={image} alt="Premium Icon" />
          </div>
          <span className="rounded-full bg-green-600/20 text-green-600 px-3 py-1.5 text-sm self-start">
            New
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Premium</h2>
          <p className="text-base text-gray-500">
            Generate high-quality content, blogs, and marketing copy in seconds
            with advanced AI.
          </p>

          <p>
            <span className="text-2xl font-bold">$29</span>
            <span className="text-xl text-gray-500 capitalize">/mo</span>
          </p>
        </div>
        <ul className="mt-4 flex flex-col gap-2 text-base">
          <li>
            <MdCheck className="size-5 me-2 inline-block text-success" />
            <span>High-resolution image generation</span>
          </li>
          <li>
            <MdCheck className="size-5 me-2 inline-block text-success" />
            <span>Customizable style templates</span>
          </li>
          <li>
            <MdCheck className="size-5 me-2 inline-block text-success" />
            <span>Batch processing capabilities</span>
          </li>
          <li>
            <MdCheck className="size-5 me-2 inline-block text-success" />
            <span>AI-driven image enhancements</span>
          </li>
          <li className="opacity-50">
            <MdCheck className="size-5 me-2 inline-block text-base-content/50" />
            <span className="line-through">Seamless cloud integration</span>
          </li>
          <li className="opacity-50">
            <MdCheck className="size-5 me-2 inline-block text-base-content/50" />
            <span className="line-through">Real-time collaboration tools</span>
          </li>
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary-custom py-6 btn-block">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
