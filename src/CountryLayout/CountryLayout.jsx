import React from 'react';
import Navigation from '../components/Navigationbar/Navigation';
import CountryNav from '../components/CountryNav/CountryNav';
import { Outlet } from 'react-router-dom';
import Header from '../components/HeaderDesign/Header';
import Footer from '../components/Footer/Footer';


const CountryLayout = () => {
    return (
        <div>
            {/* main */}
            <Navigation></Navigation>
            {/* banner img */}
            <Header></Header>
            <CountryNav></CountryNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default CountryLayout;