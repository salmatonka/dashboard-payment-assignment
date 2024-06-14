import React from 'react'

const Elopement = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-3 sm:p-10">
                <h1 className="text-4xl text-[#1D59A0] font-bold leading-none text-center sm:text-5xl">Our Elopement</h1>
                <p className='py-4'>Packages & Pricing</p>

                <p className="max-w-2xl text-center dark:text-gray-400">carefully created with you in mind</p>
                <div className="flex flex-row flex-wrap-reverse justify-center">

                    <div className="flex flex-col justify-center m-4 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6viMX5wWyTMHNlh15fz2OWzMAxBVU0qQDEns_1xH_QW8Oh5YdWfT7E_4JhaP4SE7wA0&usqp=CAU" />
                        <p className="text-xl font-semibold leading-tight">Four Day Elopement</p>
                        <p className="dark:text-gray-400">service_id: 01</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eyoemOn6SBp3U7O2ImRlis_UkOpZZw8d2K97EmYc27rLAdjUQi9AbdENP7mlxI0NMaU&usqp=CAU" />
                        <p className="text-xl font-semibold leading-tight">Three Day Elopement</p>
                        <p className="dark:text-gray-400">service_id: 02</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-x1iy5AogJWkjZKDBtoOW6JpBkhtF5_y8CEmtsXIYenN4cyQX9zrBHNhdWOUCmyBXwc&usqp=CAU" />
                        <p className="text-xl font-semibold leading-tight">Two Day Elopement</p>
                        <p className="dark:text-gray-400">service_id: 03</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxTgxVdQ5v-cbu6sCSpA9bi0H86sl7qcoWQ&usqp=CAU" />
                        <p className="text-xl font-semibold leading-tight">Full Day Elopement</p>
                        <p className="dark:text-gray-400">service_id: 04</p>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Elopement
