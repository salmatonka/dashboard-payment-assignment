import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { BsCardText } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { BiSolidHourglass } from "react-icons/bi";
import { TbFloatRight } from "react-icons/tb";
const DashboardLayout = () => {


    return (


        <div>
            <div className=''>
                {/* <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button> */}

                <div className="navbar bg-base-800">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost bg-gray-100 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {/* responsive */}


                                <a href="https://flowbite.com/" className="flex items-center pl-2.5 mb-5">
                                    <img src="https://previews.123rf.com/images/butenkow/butenkow1701/butenkow170102106/70227809-wedding-photographer-vector-illustration-of-icon.jpg" className="h-6 mr-3 sm:h-7" alt="logo" />
                                    <span
                                        className="font-extrabold text-xl text-center  text-[#1D59A0]">DASHBOARD</span>
                                </a>
                                <hr className="w-84 border border-sky-500 mb-6" />

                                <li className='pb-4 px-4'>
                                    <Link to='/' className="flex items-center p-2 rounded-lg  group w-full border ">
                                        <ImHome />
                                        <span className="ml-3">Home</span>
                                    </Link>
                                </li>
                                <li className='pb-4 px-4'>
                                    <Link to='/dashboard/cart' className="flex items-center p-2 rounded-lg  group w-full border ">
                                        <FaShoppingCart />
                                        <span className="ml-3">Cart</span>
                                    </Link>
                                </li>
                                <li className='pb-4 px-4'>
                                    <Link to='/dashboard/addProduct' className="flex items-center p-2 rounded-lg  group w-full border">
                                        <MdOutlineSupervisorAccount />
                                        <span className="ml-3">Add Product</span>
                                    </Link>
                                </li>
                                <li className='pb-4 px-4'>
                                    <Link to='/dashboard/myProduct' className="flex items-center p-2 rounded-lg  group w-full border">
                                        <BiSolidHourglass />
                                        <span className="ml-3">My Product</span>
                                    </Link>
                                </li>
                                <li className='pb-4 px-4'>
                                    <Link to='/dashboard/userProfile' className="flex items-center p-2 rounded-lg  group w-full border">
                                        <BiSolidHourglass />
                                        <span className="ml-3">User Profile</span>
                                    </Link>
                                </li>


                                <li className='pb-4 px-4'>
                                    <Link to='/dashboard/allUsers' className="flex items-center p-2 rounded-lg  group w-full border">
                                        <TbFloatRight />
                                        <span className="ml-3">All Users</span>
                                    </Link>
                                </li>

                            </ul>


                        </div>
                        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    </div>


                    <div className="navbar-center  hidden lg:flex">

                        {/* <HeadLine /> */}
                        <a href="https://flowbite.com/" className="flex items-center pl-2.5 mb-5">
                            <img src="https://previews.123rf.com/images/butenkow/butenkow1701/butenkow170102106/70227809-wedding-photographer-vector-illustration-of-icon.jpg" className="h-6 mr-3 sm:h-7" alt="logo" />
                            <span
                                className="font-extrabold text-3xl text-center  text-[#1D59A0] ">Wedding House</span>
                        </a>
                        <hr className="w-84 border border-sky-500 mb-6" />

                    </div>

                </div>



                <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div class="h-full px-3 py-4 overflow-y-auto text-white bg-[#1D59A0] ">
                        <a href="https://flowbite.com/" class="flex items-center pl-2.5 mb-5">
                            <img src="https://previews.123rf.com/images/butenkow/butenkow1701/butenkow170102106/70227809-wedding-photographer-vector-illustration-of-icon.jpg" className="h-6 mr-3 sm:h-7" alt="logo" />
                            <span
                                className="font-extrabold text-xl text-center text-transparent text-white self-center whitespace-nowrap">DASHBOARD</span>
                        </a>
                        <hr className="w-84 border text-white mb-6" />

                        <ul class="space-y-2 font-medium">


                            <li className='pb-4 px-4'>
                                <Link to='/' className="flex items-center p-2 rounded-lg  group w-full border ">
                                    <ImHome />
                                    <span className="ml-3">Home</span>
                                </Link>
                            </li>
                            <li className='pb-4 px-4'>
                                    <Link to='/dashboard/cart' className="flex items-center p-2 rounded-lg  group w-full border ">
                                        <FaShoppingCart />
                                        <span className="ml-3">Cart</span>
                                    </Link>
                                </li>
                            <li className='pb-4 px-4'>
                                <Link to='/dashboard/addProduct' className="flex items-center p-2 rounded-lg  group w-full border">
                                    <MdOutlineSupervisorAccount />
                                    <span className="ml-3">Add Product</span>
                                </Link>
                            </li>
                            <li className='pb-4 px-4'>
                                <Link to='/dashboard/myProduct' className="flex items-center p-2 rounded-lg  group w-full border">
                                    <BiSolidHourglass />
                                    <span className="ml-3">My Product</span>
                                </Link>
                            </li>

                            <li className='pb-4 px-4'>
                                    <Link to='/dashboard/userProfile' className="flex items-center p-2 rounded-lg  group w-full border">
                                        <BiSolidHourglass />
                                        <span className="ml-3">User Profile</span>
                                    </Link>
                                </li>
                            <li className='pb-4 px-4'>
                                <Link to='/dashboard/allUsers' className="flex items-center p-2 rounded-lg  group w-full border">
                                    <TbFloatRight />
                                    <span className="ml-3">All Users</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </aside>

                <div class="lg:pl-4 sm:ml-64 ">
                    <div class="">
                        <Outlet />
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};





export default DashboardLayout
