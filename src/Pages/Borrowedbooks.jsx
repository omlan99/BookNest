import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Borrowedbooks = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.email)
    axios.get(`/http://localhost:5000/borrow_books?email=${user?.email}`)
    .then(res => {console.log(res)})
    return (
        <div>
            hi borrow me
        </div>
    );
};

export default Borrowedbooks;