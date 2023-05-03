import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chefcard from './Chefcard';

const CountryChefs = () => {
    const datas = useLoaderData()

    return (
        <div>
            {/* category */}
            <h1 className='text-3xl font-semibold text-center'>Great Chefs Ready To <br />
                Make Best Food.</h1>
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
    );
};

export default CountryChefs;