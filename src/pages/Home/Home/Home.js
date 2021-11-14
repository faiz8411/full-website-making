import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AllReview from '../AllReview/AllReview';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Text from '../Text/Text';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>

            <Banner></Banner>
            <AllReview></AllReview>
            <Services></Services>

            <About></About>



            <Footer></Footer>
        </div>
    );
};

export default Home;