import React from 'react';
import bg from '../../assets/side-view-male-chef-flambeing-dish.jpg'
const Header = () => {
    
    return (
        // banner image
        <div className='px-2' style={{
             width: 'auto', 
             height:'100vh',
             class:'responsive',
             backgroundSize:'cover', backgroundImage: `url(${bg})` 
        }}>
            <h1 className='ms-12 pt-24 text-4xl text-white  md:text-8xl font-bold font-serif'>WELCOME 
            <br /> GRAND 
            <br /> MASTER CHEF</h1>
            <button className='bg-white hover:bg-gray-500 text-xl font-semibold p-2 rounded-md ms-12 mt-6'>Get Start</button>
        </div>

    );
};

export default Header;
