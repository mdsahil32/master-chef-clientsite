import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetail = () => {
    const detail = useLoaderData()

    const { chef_picture, chef_name, likes, number_of_recipes, years_of_experience, title, details, code,chef_detail } = detail
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-8 mx-12">
            <figure className='h-96 w-full'><img src={chef_picture} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">Chef: {title}</h2>
                <h1 className='text-2xl font-semibold'>Name: {chef_name}</h1>
                <p>{chef_detail}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ChefDetail;