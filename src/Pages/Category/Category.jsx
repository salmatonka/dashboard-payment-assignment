import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {

  return (
    <div className=" ">
      <div className=' w-full mx-auto'>
        <h1 className="text-3xl text-[#1D59A0] pt-14 font-bold text-center pb-10">Elopement Category</h1>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 px-10 py-10 w-full mx-auto'>

          <Link to={`/usedphoto/fourDay`}>
            <button className='bg-[#1159AB] text-white w-full py-3 rounded-lg'>Four Day Elopement</button>
          </Link>
          <Link to={`/usedphoto/threeDay`}>
            <button className='bg-[#1159AB] text-white w-full py-3 rounded-lg'>Three Day Elopement</button>
          </Link>
          <Link to={`/usedphoto/twoDay`}>
            <button className='bg-[#1159AB] text-white w-full py-3 rounded-lg'>Two Day Elopement</button>
          </Link>
          <Link to={`/usedphoto/fullDay`}>
            <button className='bg-[#1159AB] text-white w-full py-3 rounded-lg'>Full Day Elopement</button>
          </Link>
          <Link to={`/usedphoto/halfDay`}>
            <button className='bg-[#1159AB] text-white w-full py-3 rounded-lg'>Half Day Elopement</button>
          </Link>
          <Link to={`/usedphoto/miniDay`}>
            <button className='bg-[#1159AB] text-white w-full py-3 rounded-lg'>Mini Day Elopement</button>
          </Link>

        </div>
      </div>
    </div>


  )
};

export default Category
