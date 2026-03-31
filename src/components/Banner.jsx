import { CiPlay1 } from "react-icons/ci";
import bannerImage from "../assets/banner.png";

function Banner() {
  return (
    <div className="hero min-h-screen">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 py-4 md:py-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src={bannerImage} className="max-w-full" alt="" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-left">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E1E7FF] mb-4">
            <div className="relative flex items-center justify-center w-5 h-5">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-20 bg-[#7C3AED]"></span>
              <span className="absolute inline-flex w-3 h-3 rounded-full opacity-40 bg-[#7C3AED]"></span>
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
            </div>
            <span className="text-sm font-semibold uppercase text-gradient">
              New: AI-Powered Tools Available
            </span>
          </div>

          <h1 className="text-5xl xl:text-7xl font-extrabold text-[#1F2937] leading-tight text-center lg:text-left">
            Supercharge Your <br className="lg:block hidden" />
            Digital Workflow
          </h1>

          <p className="py-4 text-lg text-gray-500 lg:max-w-lg text-center lg:text-left">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary-custom btn-lg py-5">
              Explore Products
            </button>

            <button className="btn btn-secondary-custom btn-lg py-5">
              <CiPlay1 className="size-[1.2em]" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
