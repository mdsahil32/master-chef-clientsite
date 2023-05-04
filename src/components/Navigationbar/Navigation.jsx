import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            <div class="md:flex justify-between md:px-24 bg-base-100 my-1">
                <div class="">
                    <h1 className='text-3xl text-center md:font-bold'>GRAND MASTER <span className='text-orange-500'>CHEF</span></h1>
                </div>

                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box ">
                                <li tabIndex={0}>
                                    <div className='md:flex md:items-center gap-3 '>
                                        <NavLink className={({isActive}) => (isActive ? 'text-blue-600' : '')}  to='/'>Home</NavLink>
                                        <NavLink className={({isActive}) => (isActive ? 'text-blue-600' : '')} to='/blog'>Blog</NavLink>
                                        {user ? <>
                                            <button onClick={handleLogOut}>Logout</button><img className='rounded-full h-12 w-12' src={user?.photoURL} alt="" /> </> :
                                            <NavLink className={({isActive}) => (isActive ? 'text-blue-600' : '')} to='/login'>Login</NavLink>
                                        }
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*  */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li tabIndex={0}>
                                <div className='md:flex md:items-center gap-3 '>
                                    <NavLink className= {({isActive}) => (isActive ? 'text-blue-600' : '')} to='/'>Home</NavLink>
                                    <NavLink className={({isActive}) => (isActive ? 'text-blue-600' : '')} to='/blog'>Blog</NavLink>
                                    {user ? <>
                                        <button onClick={handleLogOut}>Logout</button> <p>{user?.displayName}</p> <img className='rounded-full h-12 w-12' src={user?.photoURL} alt="" /> </> :
                                        <NavLink className={({isActive}) => (isActive ? 'text-blue-600' : '')} to='/login'>Login</NavLink>
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navigation;