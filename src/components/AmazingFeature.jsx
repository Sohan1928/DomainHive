import React from "react";

const AmazingFeature = ({ image, title, description }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <img className="px-6" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default AmazingFeature;
