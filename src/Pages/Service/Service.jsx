import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard';
import { useQuery } from "@tanstack/react-query";
const Service = () => {
//     const [services, setServices] = useState([]);
//   useEffect(() => {
//     fetch('http://localhost:5000/service')
//       .then(res => res.json())
//       .then(data => setServices(data))
//   }, [])

const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
        const res = await fetch('http://localhost:5000/service')
        const data = await res.json()
        return data;
    }
})
  return (
    <div className=" ">
    <div className=' w-full mx-auto'>
        <h1 className="text-3xl text-[#1D59A0] pt-14 font-bold text-center pb-10">Elopement Services</h1>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-10'>
            {
                services?.map(service =><ServiceCard 
                    key={service?._id}
                    service={service}
                ></ServiceCard>

                    // to={`/product/${service?.service}`}>
                    // <button className='service-button bg-[#1159AB] text-white w-full py-3 rounded-lg'>{service.name}</button></ServiceCard>
                )
            }
        </div>
    </div>
</div>
  )
}

export default Service
