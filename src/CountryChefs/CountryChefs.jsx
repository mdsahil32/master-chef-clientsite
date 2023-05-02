import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chefcard from './Chefcard';

const CountryChefs = () => {
    const datas = useLoaderData()
    
    return (
        <div>
            {/* category */}
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