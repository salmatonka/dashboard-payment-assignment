import React, { useEffect, useState } from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useServiceHook = () => {
    const axiosPublic = useAxiosPublic();
   
    const {data: usedServices = [],  refetch} = useQuery({
        queryKey: ['usedServices'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/usedServices');
            return res.data;
        }
    })

// console.log(usedServices)
    return [usedServices,  refetch]
}

export default useServiceHook
