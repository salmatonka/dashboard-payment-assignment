import React from 'react'
import Category from '../Category/Category'
// import Service from '../../Service/Service'
import HomeService from './HomeService'
import Elopement from './Elopement'
import ChoosePlan from './ChoosePlan'
import WeddingPlace from './WeddingPlace'
import Carousel from './Carousel'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Wedding House | Home</title>
      </Helmet>
      <div className='max-w-screen-xl mx-auto'>
        <Carousel />
        <Category />
        <HomeService />
        <WeddingPlace />
        <Elopement />
        <ChoosePlan />
      </div>
    </>
  )
}

export default Home
