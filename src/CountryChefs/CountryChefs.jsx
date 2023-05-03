import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chefcard from './Chefcard';

const CountryChefs = () => {
    const datas = useLoaderData()

    return (
        <>
            {/* category */}
           
                <div className='md:grid grid-cols-2'>
            {
                datas.map(data =>
                    <Chefcard
                        key={data.code}
                        data={data}
                    >

                    </Chefcard>
                )
            }
            </div>
        </>
    );
};

export default CountryChefs;