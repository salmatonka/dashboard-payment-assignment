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
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";

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
                loader: async ({ params }) => await fetch(`https://dashboard-payment-server.onrender.com/usedServices/${params?.category}`),
                element: <FilterByCategorey />
            },
            {
                path: '/service/:id',
                loader: async ({ params }) => await fetch(`https://dashboard-payment-server.onrender.com/service/${params?.id}`),
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
                path: 'userHome',
                element: <UserHome />
              },
            {
                path: '/dashboard/cart',
                element: <Cart />
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProduct />
            },
            // admin only routes
            {
                path: '/dashboard/addProduct',
                element:<AddProduct /> 
            },
            {
                path: '/dashboard/editProduct/:id',
                element: <EditProduct/> ,
                loader: async({params})=> await fetch(`https://dashboard-payment-server.onrender.com/usedServices/${params.id}`),
            },
            {
                path: '/dashboard/userProfile',
                element:<UserProfile />
                // element:<AdminRoute><UserProfile /></AdminRoute> 
            },
              
            {
                path: '/dashboard/allUsers',
                // element:<AdminRoute><AllUsers /></AdminRoute> 
                element:<AllUsers /> 
            },
            {
                path: '/dashboard/payment',
                element: <Payment />
              },
              {
                path: '/dashboard/paymentHistory',
                element: <PaymentHistory />
              },
            
            
        ]
    }
])