import React from "react";

import HomeTemplate from "../../components/templates/HomeTemplate";
import Header from "../../components/organisms/Header";
import MainContent from "../../components/organisms/MainContent";
import Footer from "../../components/atoms/Footer";

const HomePage = () => {
  return (
    <HomeTemplate
      banner={<Header />}
      content={<MainContent />}
      footer={<Footer />}
    />
  );
};

export default HomePage;
