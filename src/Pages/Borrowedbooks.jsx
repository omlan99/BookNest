import axios from 'axios';
import { AuthContext } from '../Context/AuthProvider';
import { useContext, useEffect, useState } from 'react';

const Borrowedbooks = () => {
    const {user} = useContext(AuthContext)
    const [borrowedBooks, setBorrowedBooks] = useState([])
    useEffect(() => {
        if(!user?.email) return
        // axios.get(`http://localhost:5000/borrow_books?email=${user.email}`)
        axios.get(`https://book-nest-server-wine.vercel.app/borrow_books?email=${user.email}`)
        .then(res => {
            console.log(res.data)
            setBorrowedBooks(res.data)

        })
    }, [user?.email])
    return (
        <div>
            
        </div>
    );
};

export default Borrowedbooks;