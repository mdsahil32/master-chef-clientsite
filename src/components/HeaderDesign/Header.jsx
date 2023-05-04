import React from 'react';
import bg from '../../assets/side-view-male-chef-flambeing-dish.jpg'
const Header = () => {

    return (
        // banner image
        <div className='' style={{
            width: 'auto',
            height: '100vh',
            class: 'responsive',
            backgroundSize: 'cover', backgroundImage: `url(${bg})`,

        }}>
            <div className='relative h-screen bg-black/60 px-2'>
                <h1 className='ms-12 pt-24 text-4xl text-white  md:text-8xl font-bold font-serif'><span className='text-orange-500 underline'>WELCOME</span>
                    <br /> GRAND
                    <br /> MASTER CHEF</h1>
                <button className='bg-white hover:bg-black text-xl text-gray-500 font-semibold p-1 rounded-sm ms-12 mt-6'>Check Quality Food</button>
            </div>
        </div>

    );
};

export default Header;
