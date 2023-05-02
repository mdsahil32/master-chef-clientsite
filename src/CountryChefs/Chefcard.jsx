import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';

const Chefcard = ({data}) => {
    console.log(data);
    const {chef_picture, chef_name,likes,number_of_recipes,years_of_experience,title, details} = data
    {/* newsCard */}
    return (
            <div className="card card-side bg-base-100 shadow-xl my-5 mx-12">
            <figure className='h-full w-80'><img src={chef_picture} alt="Movie"/></figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <h2 className="card-title">Name: {chef_name}</h2>
              <p>Recipe: {number_of_recipes} Experience: {years_of_experience} Year</p>
              <span className='flex items-center'><FaRegThumbsUp/> {likes}</span>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
    );
};

export default Chefcard;