import React, { useContext } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const service = useLoaderData();
    const { _id, name, image, price, rating, description } = service;




    return (
        <>
            <Helmet>
                <title>Wedding House | ServiceDetails</title>
            </Helmet>


            <section className="text-gray-800 pt-12">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold text-[#1159AB] mb-3 leading-none sm:text-6xl">{name}</h1>
                        <hr />
                        <hr />
                        <p className="text-lg mt-5">{description}</p>
                        <p className='pt-6 font-bold'>Price: ৳  <span className=' text-blue-700 font-bold  text-xl'> {price}</span> </p>
                        <p className='pb-6 font-bold'>Rating: <span className='text-blue-700 font-bold  text-xl'>{rating}</span> </p>

                        <label htmlFor='booking-modal' className="btn bg-[#1159AB] font-bold text-white mt-3">Book Now!</label>


                        <div>
                            <input type="checkbox" id="booking-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label

                                        htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">{name} for </h3>
                                    <form >
                                        <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full my-3" disabled />
                                        <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3" disabled />
                                        <div className='flex justify-between'>
                                            <p>Price: ৳ {price}</p>
                                        </div>
                                        <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full my-3" required />
                                        <textarea name='location' className="textarea textarea-bordered w-full my-3" placeholder="You Location" required />
                                        {
                                            !user && <p>Please login</p>
                                        }
                                        <input htmlFor="booking-modal" type="submit" value='Submit' className={user ?
                                            "btn bg-[#1159AB] w-full"
                                            :
                                            "btn btn-accent w-full btn-disabled"
                                        } >
                                        </input>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}





export default ServiceDetails
