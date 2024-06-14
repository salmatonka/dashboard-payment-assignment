import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../useHooks/useAxiosPublic";
import useAxiosSecure from "../../../useHooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditProduct = () => {
    const {name, category, rating, description, price, _id} = useLoaderData();

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                rating: data.rating,
                description: data.description,
                img: res.data.data.display_url
            }
            // 
            const serviceRes = await axiosSecure.post('/usedServices', menuItem);
            console.log(serviceRes.data)
            if (serviceRes.data.insertedId) {
                // show success popup
                
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset();
                navigate('/dashboard/myProduct');
            }
        }
        console.log('with image url', res.data);
    };


    return (
        <div className=' py-16 px-14'>
            <div className='flex justify-center mb-12 mt-5'>
                <div className='shadow-xl p-10 border border-2'>
                    <h3 className='text-3xl text-bold text-center'>Please Add Product</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='md:flex gap-10'>
                            {/* left side  */}
                            <div className='md:w-1/2 '>
                                {/* service Name */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input
                                    defaultValue={name}
                                        type="text"
                                        placeholder="Service Name"
                                        {...register('name', { required: true })}
                                        required
                                        className="input input-bordered w-full" />
                                </div>


                                {/* price */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Price*</span>
                                    </label>
                                    <input
                                    defaultValue={price}
                                        type="number"
                                        placeholder="Price"
                                        {...register('price', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>

                                {/* rating */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input
                                    defaultValue={rating}
                                        type="number"
                                        placeholder="Rating"
                                        {...register('rating', { required: true })}
                                        className="input input-bordered w-full" />
                                </div>

                            </div>
                            {/* Right side  */}
                            <div className='md:w-1/2'>

                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Category*</span>
                                    </label>
                                    <select defaultValue={category}  {...register('category', { required: true })}
                                        className="select select-bordered w-full">
                                        <option disabled value="default">Select a category</option>
                                        <option value="fourDay">fourDay</option>
                                        <option value="threeDay">ThreeDay</option>
                                        <option value="twoDay">TwoDay</option>
                                        <option value="fullDay">FullDay</option>
                                        <option value="halfDay">HalfDay</option>
                                        <option value="miniDay">MiniDay</option>
                                    </select>
                                </div>

                                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea defaultValue={description} {...register('description')} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input  {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>


                            </div>
                        </div>

                        <input className='btn btn-primary text-white w-full mt-5' type="submit" value='Add new product' />

                    </form>


                </div>
            </div>
        </div>
    );
};
export default EditProduct
