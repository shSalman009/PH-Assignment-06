import React from "react";

function Stats() {
  return (
    <div className="shadow bg-(image:--primary-gradient) w-full rounded-none py-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-x-2 divide-gray-400">
      <div className="text-center">
        <div className="text-white text-6xl font-bold mb-2">50K+</div>
        <div className="text-gray-100 text-xl">Active Users</div>
      </div>

      <div className="text-center">
        <div className="text-white text-6xl font-bold mb-2">200+</div>
        <div className="text-gray-100 text-xl">Premium Tools</div>
      </div>

      <div className="text-center">
        <div className="text-white text-6xl font-bold mb-2">4.9</div>
        <div className="text-gray-100 text-xl">Rating</div>
      </div>
    </div>
  );
}

export default Stats;
