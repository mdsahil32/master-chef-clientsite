import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetail = () => {
    const detail = useLoaderData()

    const { chef_picture, chef_name, likes, number_of_recipes, years_of_experience, title, details, specialty, chef_detail, viewRecipe } = detail
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-8 mx-12">
                <div className='h-96 w-full'><img className='h-full' src={chef_picture} alt="Album" /></div>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-semibold">Chef: {title}</h2>
                    <h1 className='text-2xl font-semibold'>Name: {chef_name}</h1>
                    <p>{chef_detail}</p>
                    <p>Recipe: {number_of_recipes}
                    <br />
                    Experience: {years_of_experience} Year
                    </p>
                </div>
            </div>
            {/* view recipe */}
            <h1 className='text-3xl font-bold text-center my-8'>Check Chef Recipe</h1>
            <div className='flex mx-12 gap-6 mb-4'>
                {/* 1 */}
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Pasta</h2>
                        <p>{details}</p>
                    </div>
                    <figure><img src={viewRecipe?.recipe1} alt="Shoes" /></figure>
                </div>
                {/* 2 */}
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">chicken skewers</h2>
                        <p>{details}</p>
                    </div>
                    <figure><img src={viewRecipe?.recipe2} alt="Shoes" /></figure>
                </div>
                {/* 3 */}
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Vegetable Soup</h2>
                        <p>{details}</p>
                    </div>
                    <figure><img src={viewRecipe?.recipe3} alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default ChefDetail;