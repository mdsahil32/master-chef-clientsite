import React, { useContext } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            {/* // navbar  */}
            <div class="md:flex justify-between md:px-24 bg-base-100 my-3">
                <div class="">
                    <h1 className='text-3xl  md:font-bold mx-2 underline'>GRAND MASTER CHEF</h1>
                </div>
                <div className='text-center text-xl md:font-semibold flex md:justify-end md:gap-6  mx-2 '>
                    <div className='md:flex md:items-center gap-3 '>
                    <Link to='/'>Home</Link>
                    <Link>Blog</Link>

                    {
                        user ?
                        <>
                            <button onClick={handleLogOut}>Logout</button> <p>{user?.displayName}</p> <img className='rounded-full h-12 w-12' src={user?.photoURL} alt="" /> </>:
                            <Link to='/login'>Login</Link>
                    }
                    </div>

                </div>
            </div>

        </>
    );
};

export default Navigation;