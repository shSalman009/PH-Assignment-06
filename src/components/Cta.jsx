import React from "react";

export default function Cta() {
  return (
    <section class="flex flex-col items-center justify-center bg-(image:--primary-gradient) text-white px-6 py-20 text-center mt-8">
      <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
        Ready To Transform Your Workflow?
      </h2>

      <p class="max-w-2xl text-gray-300 text-base mb-10">
        Join thousands of professionals who are already using Digitools to work
        smarter. Start your free trial today.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 mb-6">
        <button class="btn btn-lg text-sm btn-secondary-custom bg-white">
          Explore Products
        </button>

        <button class="btn btn-lg btn-outline text-sm text-white hover:text-purple-600 rounded-full">
          View Pricing
        </button>
      </div>

      <div class="text-base text-gray-300">
        14-day free trial • No credit card required • Cancel anytime
      </div>
    </section>
  );
}
