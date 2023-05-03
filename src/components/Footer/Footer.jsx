import React from 'react';
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/fb.png'
const Footer = () => {
    return (
        <div className='bg-gray-900 text-center text-white px-16 py-8 mt-24'>
            <h1 className='text-2xl font-semibold'>GRAND MASTER CHEF </h1><span>Also here for customer</span>
            <p>Thank You to visit our website
                <br /> Have a Good Day</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
            <br />
            <p>Email : info@gmail.com</p>
            <p>Phone : 01500 00 00 00</p>
            <br />
            <div className='flex justify-center gap-16'>
                <div>
                    <p>Subscribe our YouTube Channel</p>
                    <img className='mx-auto my-2' src={youtube} alt="" />
                </div>
                <div>
                    <p>Follow our Facebook page</p>
                    <img className='mx-auto my-2' src={facebook} alt="" />
                </div>
            </div>
            <p className='text-center my-4 text-white'>© Copyright my data</p>
        </div>
    );
};

export default Footer;