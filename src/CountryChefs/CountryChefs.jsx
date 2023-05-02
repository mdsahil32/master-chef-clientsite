import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Chefcard from './Chefcard';

const CountryChefs = () => {
    const datas = useLoaderData()
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            {/* category */}
            <h1>this is {datas.length}</h1>
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