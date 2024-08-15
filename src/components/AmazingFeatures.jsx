import React from "react";
import AmazingFeature from "./AmazingFeature";

const AmazingFeatures = () => {
  const cardData = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/du0uabbwo/image/upload/v1723738964/kehp7g6jgrzdt2wkfjpm.png",
      title: "Employee Owned",
      description:
        "Supercharge your website hosting with detailed website analytics, marketing tools.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/du0uabbwo/image/upload/v1723738988/fr3uhqzo890ouwr9jrdn.png",
      title: "Commitment to Security",
      description:
        "Supercharge your website hosting with detailed website analytics, marketing tools.",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/du0uabbwo/image/upload/v1723739046/uc2biwa5s06y7muuzi71.png",
      title: "Passion for Privacy",
      description:
        "Supercharge your website hosting with detailed website analytics, marketing tools.",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/du0uabbwo/image/upload/v1723739076/agwerfqnmv8cz0sdxhml.png",
      title: "Employee Owned",
      description:
        "Supercharge your website hosting with detailed website analytics, marketing tools.",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/du0uabbwo/image/upload/v1723739101/jq2wj7wtqtybso6nyq5k.png",
      title: "24/7 Support",
      description:
        "Supercharge your website hosting with detailed website analytics, marketing tools.",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/du0uabbwo/image/upload/v1723739120/cbsgtmyenvdbjzl0syb9.png",
      title: "100% Uptime Guaranteed",
      description:
        "Supercharge your website hosting with detailed website analytics, marketing tools.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto items-center pt-10 pb-24">
      <div>
        <div>
          <h2 className="text-2xl md:text-5xl font-bold text-center">
            Most amazing features
          </h2>
        </div>

        <div className="pt-10 px-10">
          <div className="grid md:grid-cols-3 gap-6 items-center justify-center">
            {cardData.map((card) => (
              <AmazingFeature
                key={card.id}
                image={card.image}
                title={card.title}
                description={card.description}
              ></AmazingFeature>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingFeatures;
