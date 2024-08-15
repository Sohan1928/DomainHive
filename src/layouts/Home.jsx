import React from "react";
import Banner from "../components/Banner";
import SearchDomain from "../components/SearchDomain";
import AmazingFeatures from "../components/AmazingFeatures";
import ChoosePlan from "../components/ChoosePlan";
import GlobalServer from "../components/GlobalServer";
import Support from "../components/Support";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SearchDomain></SearchDomain>
      <AmazingFeatures></AmazingFeatures>
      <ChoosePlan></ChoosePlan>
      <GlobalServer></GlobalServer>
      <Support></Support>
      <Faq></Faq>
    </div>
  );
};

export default Home;
