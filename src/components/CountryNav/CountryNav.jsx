import React, { useEffect, useState } from 'react';

const CountryNav = () => {
    const [datas, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='flex justify-between mx-24 my-8 '>
            {
                datas.map(data =>
                    <h3 className='font-semibold '
                    key={data.id}>
                        {data.name}
                    </h3>
                )
            }
        </div>
    );
};

export default CountryNav;