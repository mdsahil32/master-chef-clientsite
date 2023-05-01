import React from 'react';
import Navigation from '../components/Navigationbar/Navigation';
import CountryNav from '../components/CountryNav/CountryNav';
import { Outlet } from 'react-router-dom';


const CountryLayout = () => {
    return (
        <div>
            {/* main */}
            <Navigation></Navigation>
            <CountryNav></CountryNav>
            <Outlet></Outlet>
        </div>
    );
};

export default CountryLayout;