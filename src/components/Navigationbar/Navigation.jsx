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
            <div class="md:flex justify-between md:px-24 navbar bg-base-100 my-1">
                <div class="">
                    <h1 className='text-3xl font-bold'>GRAND MASTER CHEF</h1>
                </div>
                <div className='text-center text-xl font-semibold flex justify-end  gap-6'>
                    <Link to='/'>Home</Link>
                    <Link>Blog</Link>

                    {
                        user ?
                            <button onClick={handleLogOut}>Logout</button> :
                            <Link to='/login'>Login</Link>
                    }
                    {user &&
                        <>
                        <h1>{user.email}</h1>
                        <FaRegUserCircle style={{ fontSize: '2rem' }} />
                        </>
                    }

                    
                    
                </div>
            </div>

        </>
    );
};

export default Navigation;