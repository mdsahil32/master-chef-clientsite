import React from 'react';
import Navigation from '../components/Navigationbar/Navigation';

import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            {/* LoginLayout */}
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;