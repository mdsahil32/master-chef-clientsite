import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import google from '../../assets/google.png'
import github from '../../assets/GitHub_Logo.png'

const Login = () => {
    const [error, setError] = useState()
    const navigate = useNavigate()

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    const from = location.state?.from?.pathname || '/country/0'

    const handleLogin = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const logged = result.user;
                console.log(logged);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result =>{
            const logged = result.user;
            console.log(logged);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const handleGithubSignIn = ()=>{
        signInWithGithub()
        .then(result =>{
            const logged = result.user;
            console.log(logged);
            navigate(from, { replace: true })
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>New to Master Chef ? <Link to='/register' className='underline'>Register Now</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login now</button>
                            </div>
                            <p><small className='text-red-600'>{error}</small></p>
                            <Link className='flex justify-between'>
                                <img onClick={handleGoogleSignIn} className='w-24 mt-3 border ' src={google} alt="" />
                                <img onClick={handleGithubSignIn} className='w-24 mt-3 border ' src={github} alt="" />
                            </Link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;