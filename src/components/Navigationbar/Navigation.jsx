import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="">
                <h1 className='mx-12 text-2xl font-bold'>GRAND MASTER CHEF</h1>
            </div>
            <div className='text-center flex mx-auto gap-6'>
                <Link>Home</Link>
                <Link>Blog</Link>
                <Link>Login</Link>
                <FaRegUserCircle style={{ fontSize: '2rem' }} />

            </div>
        </div>
    );
};

export default Navigation;