import React from "react";
import { PiCheckSquareOffsetThin } from "react-icons/pi";

const GlobalServer = () => {
  return (
    <div className="max-w-7xl mx-auto pb-16 px-10">
      <div className="md:flex gap-10 items-center">
        <div className="pb-8 md:pb-0">
          <img
            src="https://res.cloudinary.com/du0uabbwo/image/upload/v1723745282/ftijtavy2sqwlpbsqtwn.png"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl text-center md:text-start md:text-5xl text-purple-900 font-bold">
            Global server location
          </h1>
          <p className="opacity-80 pt-6 pb-10">
            Supercharge your website hosting with detailed website analytics,
            marketing <br /> tools. Our experts are just part of the reason
            Bluehost is the ideal home <br /> for your website. We're here to
            help you succeed!
          </p>
          <div>
            <p className="flex items-center gap-2 pb-3">
              <PiCheckSquareOffsetThin className="text-violet-600"></PiCheckSquareOffsetThin>
              <span></span>WordPress hosting with detailed website
            </p>
            <p className="flex items-center gap-2 pb-3">
              <PiCheckSquareOffsetThin className="text-violet-600"></PiCheckSquareOffsetThin>
              <span></span>Our experts are just part of the reason
            </p>
            <p className="flex items-center gap-2 pb-3">
              <PiCheckSquareOffsetThin className="text-violet-600"></PiCheckSquareOffsetThin>
              <span></span>Detailed website analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalServer;
