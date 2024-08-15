import React from "react";
import ChoosePlanCart from "./ChoosePlanCart";

const ChoosePlan = () => {
  return (
    <div className="max-w-7xl mx-auto pb-16 px-10">
      <div>
        <div className="text-center items-center pb-16">
          <h1 className="text-2xl md:text-5xl font-bold pb-8">
            Choose plan which fit for you
          </h1>
          <p className="opacity-80">
            Supercharge your website hosting with detailed website analytics,
            marketing tools. Our experts are just part of the reason Bluehost is
            the ideal home for your website. We're here to help you succeed!
          </p>
        </div>
        <div>
          <ChoosePlanCart></ChoosePlanCart>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
