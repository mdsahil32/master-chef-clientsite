import React from 'react';
import Navigation from '../components/Navigationbar/Navigation';
import CountryNav from '../components/CountryNav/CountryNav';


const CountryLayout = () => {
    return (
        <div>
            {/* main */}
            <Navigation></Navigation>
            <CountryNav></CountryNav>
        </div>
    );
};

export default CountryLayout;