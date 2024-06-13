import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { RouterProvider } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routes } from './Routes/Routes';
import AuthProvider from './Providers/AuthProvider';

import { HelmetProvider } from 'react-helmet-async';
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastContainer />
        <RouterProvider router={routes} />
      </AuthProvider>
    </QueryClientProvider> */}

<AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {/* <div className='max-w-screen-xl mx-auto'> */}
            <RouterProvider router={routes} />
          {/* </div> */}
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
