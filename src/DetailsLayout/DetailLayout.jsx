import React from 'react';
import Navigation from '../components/Navigationbar/Navigation';
import { Outlet, useLoaderData } from 'react-router-dom';

const DetailLayout = () => {
    const detail = useLoaderData()
    console.log(detail);
    return (
        <div>
            {/* newLayout */}
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default DetailLayout;