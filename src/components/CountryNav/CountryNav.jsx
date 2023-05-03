import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const CountryNav = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
        <h1 className='md:text-5xl text-2xl md:mt-16 mt-6 font-semibold text-center font-serif'>Great Chefs Ready To <br />
         Make <span className='text-orange-500'>Best Food</span>.</h1>
        <div className='md:flex justify-between ms-8 md:mx-24 md:my-14 my-8'>
            {
                countries.map(country =>
                    <h3 className='font-semibold  md:text-xl'
                    key={country.id}>
                       <NavLink to={`/country/${country.id}`} className={({isActive}) => (isActive ? 'bg-gray-500 p-2 rounded-md text-white' : '')}>
                       {country.name}
                       </NavLink>
                    </h3>
                )
            }
            
        </div>
         
        </>
    );
};

export default CountryNav;