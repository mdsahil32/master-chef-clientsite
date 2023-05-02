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
                    <h1 className='text-3xl  md:font-bold mx-2'>GRAND MASTER CHEF</h1>
                </div>
                <div className='text-center text-xl md:font-semibold flex md:justify-end md:gap-6 mx-2 '>
                    <div className='md:flex gap-3'>
                    <Link to='/'>Home</Link>
                    <Link>Blog</Link>

                    {
                        user ?
                            <button onClick={handleLogOut}>Logout</button> :
                            <Link to='/login'>Login</Link>
                    }
                    </div>
                    {user &&
                        <div className='flex '>
                            <h1>{user.email}</h1>
                            <FaRegUserCircle style={{ fontSize: '2rem' }} />
                        </div>
                    }



                </div>
            </div>

        </>
    );
};

export default Navigation;