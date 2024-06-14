import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Pages/HomePages/Home";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import LogIn from "../Pages/Forms/LogIn";
import SignUp from "../Pages/Forms/SignUp";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import FilterByCategorey from "../Pages/FilterByCategorey/FilterByCategorey";
import Service from "../Pages/Service/Service";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../Pages/Dashboard/MyProduct/MyProduct";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Pages/Dashboard/Cart/Cart";
import EditProduct from "../Pages/Dashboard/EditProduct/EditProduct";
// import EditProduct from "../Pages/Dashboard/EditProduct/EditProduct";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            //useLoader in this home path: important!*************************
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/service',
                element: <Service />
            },
            {
                path: '/usedServices/:category',
                loader: async ({ params }) => await fetch(`http://localhost:5000/usedServices/${params?.category}`),
                element: <FilterByCategorey />
            },
            {
                path: '/service/:id',
                loader: async ({ params }) => await fetch(`http://localhost:5000/service/${params?.id}`),
                element: <ServiceDetails />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage />,
        element:<PrivateRoute> <DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/cart',
                element: <Cart />
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProduct />
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct />
            },
            {
                path: '/dashboard/editProduct/:id',
                element: <EditProduct/>,
                loader: async({params})=> await fetch(`http://localhost:5000/usedServices/${params.id}`),
            },
            
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allUsers',
                element:<AllUsers />
            }
            
            
        ]
    }
])