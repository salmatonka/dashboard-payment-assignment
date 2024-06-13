import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Service/ServiceCard';

const FilterByCategorey = () => {
    const category = useLoaderData();
    console.log(category)

    return (
        <div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                    {
                       category?.map(service => <ServiceCard
                            key={service?._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
        </div>
    );
};

export default FilterByCategorey
