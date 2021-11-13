import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AllReview from '../AllReview/AllReview';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>

            <Banner></Banner>
            <AllReview></AllReview>
            <Services></Services>



            <Footer></Footer>
        </div>
    );
};

export default Home;