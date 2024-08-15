import React from "react";
import Banner from "../components/Banner";
import SearchDomain from "../components/SearchDomain";
import AmazingFeatures from "../components/AmazingFeatures";
import ChoosePlan from "../components/ChoosePlan";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SearchDomain></SearchDomain>
      <AmazingFeatures></AmazingFeatures>
      <ChoosePlan></ChoosePlan>
    </div>
  );
};

export default Home;
