/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(authContext)
    

    if(user){
        return children
    }
    if (loading){
        return <span className="loading loading-spinner loading-lg mx-auto"></span>
    }
    return <Navigate state={location.pathname} to={"/Login"} ></Navigate>
};

export default PrivateRoute;