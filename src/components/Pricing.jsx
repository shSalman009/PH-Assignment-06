import React from "react";
import { MdCheck } from "react-icons/md";

export default function Pricing() {
  return (
    <div className="mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Simple, Transparent Pricing
          </h1>
          <p className="py-4 text-sm md:text-base text-gray-500 lg:max-w-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="card border-2 border-gray-100 rounded-xl bg-base-200">
            <div className="card-body p-4 items-start space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">Starter</h2>
                <p className="text-base text-gray-500">
                  Perfect for getting started
                </p>
              </div>
              <div>
                <span className="text-4xl font-bold">$0</span>
                <span className="text-xl text-gray-500 capitalize">/Month</span>
              </div>
              <ul className="flex flex-col gap-1 text-base mb-12">
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    Access to 10 free tools
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    Basic templates
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    Community support
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    1 project per month
                  </span>
                </li>
              </ul>
              <button className="btn btn-primary-custom py-6 btn-block mt-auto">
                Get Started Free
              </button>
            </div>
          </div>
          <div className="card border-2 border-gray-100 rounded-xl bg-base-200 bg-(image:--primary-gradient) text-white relative">
            <div className="bg-yellow-100 text-red-500 text-sm rounded-full px-2 py-1 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Most Popular
            </div>

            <div className="card-body p-4 items-start space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">Pro</h2>
                <p className="text-base text-gray-300">
                  Best for professionals
                </p>
              </div>
              <div>
                <span className="text-4xl font-bold">$0</span>
                <span className="text-xl text-gray-300 capitalize">/Month</span>
              </div>
              <ul className="flex flex-col gap-1 text-base mb-12">
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-gray-200" />
                  <span className="text-gray-200 font-medium">
                    Access to all premium tools
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-gray-200" />
                  <span className="text-gray-200 font-medium">
                    Unlimited templates
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-gray-200" />
                  <span className="text-gray-200 font-medium">
                    Priority support
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-gray-200" />
                  <span className="text-gray-200 font-medium">
                    Unlimited projects
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-gray-200" />
                  <span className="text-gray-200 font-medium">Cloud sync</span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-gray-200" />
                  <span className="text-gray-200 font-medium">
                    Advanced analytics
                  </span>
                </li>
              </ul>
              <button className="btn bg-white py-6 btn-block mt-auto rounded-full">
                <span className="text-gradient font-semibold">
                  Start Pro Trial
                </span>
              </button>
            </div>
          </div>
          <div className="card border-2 border-gray-100 rounded-xl bg-base-200">
            <div className="card-body p-4 items-start space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">Enterprise</h2>
                <p className="text-base text-gray-500">
                  For teams and businesses
                </p>
              </div>
              <div>
                <span className="text-4xl font-bold">$99</span>
                <span className="text-xl text-gray-500 capitalize">/Month</span>
              </div>
              <ul className="flex flex-col gap-1 text-base mb-12">
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    Everything in Pro
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    Team collaboration
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    Custom integrations
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    Dedicated support
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    SLA guarantee
                  </span>
                </li>
                <li>
                  <MdCheck className="size-5 me-2 inline-block text-success" />
                  <span className="text-gray-500 font-medium">
                    Custom branding
                  </span>
                </li>
              </ul>
              <button className="btn btn-primary-custom py-6 btn-block mt-auto">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
