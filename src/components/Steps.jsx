import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

export default function Steps() {
  return (
    <div className="bg-base-200 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Get Started in 3 Steps
          </h1>
          <p className="py-4 text-sm md:text-base text-gray-500 lg:max-w-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="card bg-base-100 border-2 border-gray-100 rounded-xl relative">
            <div className="card-body px-4 py-12 items-center text-center space-y-2">
              <span className="w-10 h-10 p-2 rounded-full grid place-items-center bg-(image:--primary-gradient) text-white font-semibold absolute top-5 right-5">
                01
              </span>
              <div className="w-24 h-24 p-4 rounded-full grid place-items-center bg-purple-100">
                <img className="max-w-full" src={userIcon} alt="Premium Icon" />
              </div>

              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="text-base text-gray-500">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>{" "}
          <div className="card bg-base-100 border-2 border-gray-100 rounded-xl relative">
            <div className="card-body px-4 py-12 items-center text-center space-y-2">
              <span className="w-10 h-10 p-2 rounded-full grid place-items-center bg-(image:--primary-gradient) text-white font-semibold absolute top-5 right-5">
                02
              </span>
              <div className="w-24 h-24 p-4 rounded-full grid place-items-center bg-purple-100">
                <img
                  className="max-w-full"
                  src={packageIcon}
                  alt="Premium Icon"
                />
              </div>

              <h2 className="text-2xl font-bold">Choose Products</h2>
              <p className="text-base text-gray-500">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>{" "}
          <div className="card bg-base-100 border-2 border-gray-100 rounded-xl relative">
            <div className="card-body px-4 py-12 items-center text-center space-y-2">
              <span className="w-10 h-10 p-2 rounded-full grid place-items-center bg-(image:--primary-gradient) text-white font-semibold absolute top-5 right-5">
                03
              </span>
              <div className="w-24 h-24 p-4 rounded-full grid place-items-center bg-purple-100">
                <img
                  className="max-w-full"
                  src={rocketIcon}
                  alt="Premium Icon"
                />
              </div>

              <h2 className="text-2xl font-bold">Start Creating</h2>
              <p className="text-base text-gray-500">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
