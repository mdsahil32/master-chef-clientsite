import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountryNav = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='flex justify-between mx-24 my-8 '>
            {
                countries.map(country =>
                    <h3 className='font-semibold '
                    key={country.id}>
                       <Link to={`/country/${country.id}`} className='text-black text-decoration-none'>
                       {country.name}
                       </Link>
                    </h3>
                )
            }
        </div>
    );
};

export default CountryNav;