import React from 'react';
import AllProduct from '../../AllProduct/AllProduct';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Products = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AllProduct></AllProduct>
            <Footer></Footer>
        </div>
    );
};

export default Products;