import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;
      console.log(name, email , photo, password)
    }
    return (
      <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 w-full max-w-xl  shadow-2xl">
          <h1 className="text-3xl font-bold">Sign Up now!</h1>
          <form className="w-96 m-4" onSubmit={handleSubmit}>
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
          <div>
             <p>Already have an account? Please <Link to={'/login'} className="text-purple-500"> Log In</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;