import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <>
            {/* // navbar  */}
            <div class="md:flex justify-between md:px-12 navbar bg-base-100">
                <div class="">
                    <h1 className='text-2xl font-bold'>GRAND MASTER CHEF</h1>
                </div>
                <div className='text-center flex justify-end  gap-6'>
                    <Link to='/'>Home</Link>
                    <Link>Blog</Link>
                    <Link to='/login'>Login</Link>
                    <FaRegUserCircle style={{ fontSize: '2rem' }} />

                </div>
            </div>
           
        </>
    );
};

export default Navigation;