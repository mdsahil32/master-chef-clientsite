import React from 'react';
import Navigation from '../components/Navigationbar/Navigation';
import spinner from '../../public/spinner.json'
import { Outlet, useNavigation } from 'react-router-dom';
import Lottie from 'lottie-react'
import Footer from '../components/Footer/Footer';


const Main = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navigation></Navigation>
             <div className='flex justify-center items-center'>{navigation.state === 'loading' && <Lottie animationData={spinner} /> }</div>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;