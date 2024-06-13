import React from 'react'
import Category from '../../Category/Category'
// import Service from '../../Service/Service'
import HomeService from '../HomeService'

const Home = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      Home
      <Category />
      <HomeService />
    </div>
  )
}

export default Home
