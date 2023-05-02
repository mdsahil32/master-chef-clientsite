import React from 'react';
import Navigation from '../components/Navigationbar/Navigation';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const DetailLayout = () => {
    const detail = useLoaderData()
    console.log(detail);
    return (
        <div>
            {/* newLayout */}
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DetailLayout;