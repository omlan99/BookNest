import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { Oval } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)

    if(loader){
        return <div className='w-full min-h-screen flex justify-center items-center'>  <Oval
            visible={true}
            height="80"
            width="80"
            color="#000"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            /></div>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;