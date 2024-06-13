import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

import { FaTrashAlt, FaUsers, FaUserShield } from "react-icons/fa";
import Swal from 'sweetalert2';
const AllUsers = () => {

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    })

    refetch();
    // if(isLoading){
    //     return <progress className="progress w-56"></progress>
    // }

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }




    //Delete an user from database
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE',
                    headers: {

                    }
                })
                    // axiosSecure.delete(`/users`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (




        < div className='lg:px-10 px-6 py-14 ' >
            <div className='my-16 lg:my-0  text-gray-700 '>
                <h1 className='text-center text-xl lg:text-3xl  font-bold  text-[#1D59A0] pb-6'>All User</h1>
                <div className="overflow-x-auto mt-8">
                    <table className="min-w-full text-xs">
                        <thead>
                            <tr className="text-left">
                                <th className="lg:p-3">User Name</th>
                                <th className="lg:p-3">User E-mail</th>
                                <th className="lg:p-3">Role</th>
                                <th className="lg:p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.map((user, i) => <tr className="border-b border-opacity-20">
                                    {/* <td className="lg:p-3">
                                        <img src={user?.image} alt="me"
                                            className="w-10 h-10 rounded-full bg-gray-100 hover:scale-150 duration-500"
                                        /></td> */}
                                    <td className="lg:p-3">{user?.name}</td>
                                    <td className="lg:p-3 ">{user?.email}</td>
                                    <td className="lg:p-3 ">{user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-ghost bg-orange-500">
                                        <FaUsers className="text-white 
                                       "></FaUsers>
                                    </button>}</td>

                                    <td>
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    );
};



export default AllUsers
