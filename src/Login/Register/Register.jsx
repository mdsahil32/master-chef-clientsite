import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const handleRegister = event =>{
        event.preventDefault()
        setError('')
        setSuccess('')
        const form = event.target;
        const name = form.name.value;
        const photo= form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
       
        // console.log(name, photo, email, password);
        if (password.length < 6) {
            setError('Your password must be 6 character or more')
            return;
        }
        createUser(email, password)
        .then(result =>{
            const createUser = result.user;
            setSuccess('Created your account successfully now you visit our website.');
            
        })
        .catch(error =>{
            setError(error.message);
        })
        form.reset()
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                            </div>
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
                                    <p>Already Have an Account? <Link to='/login' className='underline'>Login now</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className='text-red-600'>{error}</p>
                            <p className='text-green-600'>{success}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;