import React from 'react';
import { FaRegBookmark, FaRegThumbsUp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chefcard = ({ data }) => {
  // console.log(data);
  const { chef_picture, chef_name, likes, number_of_recipes, years_of_experience, title, details,code,specialty, rating } = data
  
  return (
    <div className="card  md:card-side bg-base-100 shadow-xl my-5 md:mx-16">
      
      <figure className='md:h-full md:w-full px-2'><img className='md:h-full' src={chef_picture} alt="Movie" /></figure>
      <div className="card-body">
        <div className="card-actions justify-end">
          <FaRegBookmark /> <FaShareAlt />
        </div>
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Name: {chef_name}</h2>
        <p>Specialty: {specialty}</p>
        <p>Recipe: {number_of_recipes} Experience: {years_of_experience}Year <br /> Rating: {rating}Star</p>
        <p><small>
          {
            details.length < 80 ? <>{details}</> : <>{details.slice(0, 80)}. . . . .</>
          }
          </small></p>

        <div className='card-actions justify-end items-center gap-6'>
        <span className='md:flex items-center'><FaRegThumbsUp /> {likes}</span>
          <Link to={`/chefs/${code}`}><button className='bg-gray-500 hover:bg-gray-600 text-white font-medium p-2 rounded-md'>See Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Chefcard;