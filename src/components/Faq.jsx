import React from "react";
import FaqCart from "./FaqCart";

const Faq = () => {
  return (
    <div className="max-w-7xl mx-auto pb-16 px-10">
      <div>
        <div className="text-center">
          <h1 className="text-3xl pb-6 md:text-5xl font-bold text-purple-900">
            Frequently ask questions
          </h1>
          <p className="opacity-80">
            Supercharge your website hosting with detailed website analytics,
            marketing tools. Our experts are just part of the reason <br />
            Bluehost is the ideal home for your website. We're here to help you
            succeed!
          </p>
        </div>
        <FaqCart></FaqCart>
      </div>
    </div>
  );
};

export default Faq;
