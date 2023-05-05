import React from 'react';
import Navigation from '../components/Navigationbar/Navigation';
import CountryNav from '../components/CountryNav/CountryNav';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/HeaderDesign/Header';
import Footer from '../components/Footer/Footer';
import CheckFood from '../components/CheckFood/CheckFood';
import ChefInfo from '../components/ChefInfo/ChefInfo';

const CountryLayout = () => {

    return (
        <div>
           
            <Navigation></Navigation>
            {/* banner img */}
            <Header></Header>
            <CheckFood></CheckFood>
            <CountryNav></CountryNav>
            <Outlet></Outlet>
            <ChefInfo></ChefInfo>
            <Footer></Footer>
        </div>
    );
};

export default CountryLayout;