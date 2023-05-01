import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chefcard from './Chefcard';

const CountryChefs = () => {
    const datas = useLoaderData()
    return (
        <div>
            {/* category */}
            <h1>this is {datas.length}</h1>
            {
                datas.map(data =>
                    <Chefcard
                    key={data.id}
                    data={data}
                    >

                    </Chefcard>
                    )
            }
        </div>
    );
};

export default CountryChefs;