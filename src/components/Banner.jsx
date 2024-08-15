import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 md:py-12 px-10">
      <div className="md:flex items-center">
        <div className="">
          <h1 className="text-4xl md:text-7xl pb-6 font-bold">
            Powerful web hosting
          </h1>
          <h3 className="pb-2 text-xl font-semibol text-fuchsia-700">
            Best Domain & hosting service provider.
          </h3>
          <p className=" opacity-80">
            Supercharge your website hosting with detailed website analytics
            marketing tools.
          </p>

          <button className="bg-purple-500 hover:bg-purple-600 rounded-full text-white font-bold my-8 px-6 py-3">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/du0uabbwo/image/upload/v1723733132/sirefmgnsh1uu7fxtwkp.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
