import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AllReview from "../AllReview/AllReview";
import Services from "../Services/Services";
import Carusel from "../Carusel/SwipeableTextMobileStepper";

import About from "./About/About";
import Table from "../../Table/Table";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Carusel></Carusel>
      <Table />

      <Services></Services>

      <About></About>
      <AllReview></AllReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
