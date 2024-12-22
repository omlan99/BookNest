import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
const LogIn = () => {
  const {user, signInUser,googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleGoogle = () => {
    googleSignIn()
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
    .then(result =>{
      console.log(result.user)
       navigate('/')
    })
    .catch(error =>{
      console.log(error.message)
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 w-full max-w-xl  shadow-2xl">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form className="w-96 m-4" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label ">
                <span className="label-text ">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider"></div>
          <div className='mb-4' >
            <button onClick={handleGoogle} className="btn btn-wide bg-white border-gray-500 text-xl font-medium w-full"><FcGoogle /> Google</button>
          </div>
                  
          <div>
            <p>
              Don't have an account? Please{" "}
              <Link to={"/signUp"} className="text-purple-500">
                {" "}
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
