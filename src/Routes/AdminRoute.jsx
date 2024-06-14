import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../useAdminHook/useAdmin';

const AdminRoute = () => {
    const { user, loading } = useContext();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute
