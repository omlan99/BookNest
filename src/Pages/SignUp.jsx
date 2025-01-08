import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const {setUser, createUser, updateUser, googleSignIn} =useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = () => {
      googleSignIn()
    }
    // const validatePassword = (password) => {
    //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    //   return passwordRegex.test(password);
    // };
    const handleSubmit = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;
      console.log(name, email , photo, password)
      // if (!validatePassword(password)) {
      //   console.log("Password must be at least 8 characters, include letters and numbers");
      // }
      createUser(email,password)
      .then(result =>{
        console.log(result.user)
        setUser(result.user)
        updateUser({displayName : name , photoURL : photo})
        .then(() => {
          navigate('/')
        })
        .catch(err =>{
          console.log(err)
        })

      })
      .catch(error => {
        console.log(error.message)
      })

    }
    return (
      <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 w-full max-w-xl  shadow-2xl">
          <h1 className="text-3xl font-bold ">Sign Up now!</h1>

       
          <form className=" m-4" onSubmit={handleSubmit}>
          <div className="form-control" >
              <label className="label ">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text ">Email</span>
              </label>
              <input
                name='email'
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text ">Photo URL</span>
              </label>
              <input
                type="url"
                name='photo'
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="divider"></div>
          <div className='mb-4' >
          <button onClick={handleGoogle} className="btn  bg-white border-gray-500 text-xl font-medium btn-wide"><FcGoogle /> Google</button>
          </div>
          <div>
             <p>Already have an account? Please <Link to={'/login'} className="text-purple-500"> Log In</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;