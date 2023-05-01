import React from 'react';
import { Image } from 'react-bootstrap';
import bg from '../../assets/side-view-male-chef-flambeing-dish.jpg'
const Header = () => {
    
    return (
        // banner image
        <div style={{
             width: 'auto', 
             height:'100vh',
             backgroundSize:'cover', backgroundImage: `url(${bg})` 
        }}>
            <h1 className='ms-12 pt-24 text-8xl font-bold text-orange-200'>WELCOME 
            <br /> GRAND 
            <br /> MASTER CHEF</h1>
            <button className='bg-white hover:bg-orange-200 text-xl font-semibold p-2 rounded-sm ms-12 mt-6'>Visit Website</button>
        </div>

    );
};

export default Header;
