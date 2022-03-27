import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AllReview from "../AllReview/AllReview";
import Services from "../Services/Services";
import Carusel from "../Carusel/SwipeableTextMobileStepper";
import Text from "../Text/Text";
import About from "./About/About";
import Table from "../../Table/Table";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Carusel></Carusel>
      <Table />
      <AllReview></AllReview>
      <Services></Services>

      <About></About>

      <Footer></Footer>
    </div>
  );
};

export default Home;
