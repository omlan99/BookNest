import React, { useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Login = () => {
  const location = useLocation();
  console.log(location)
  const { signInUser, googleSignIn, loader} = useContext(AuthContext);
  // console.log(loader)
  const navigate = useNavigate();
  const emailRef = useRef()
  const {register, handleSubmit, formState: {errors}} = useForm()
  const handleGoogle = async () => {
   await googleSignIn();
    navigate('/')
  };

const onSubmit =(data) =>{
    // console.log(data)
    signInUser(data.email, data.password)
    .then(result=> {
     
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
        
  })
  .catch(error => {
    toast.error(error.message)
  })
  }


  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                for="email"
                class="block text-sm/6 font-medium text-gray-900 text-left"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  ref={emailRef}
                  type="email"
                  {...register("email",{required:true})}
                  id="email"
                  autocomplete="email"
                 
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                 {errors.email?.type === "required" && (
                  <p className="text-red-600">Please Enter a password</p>
                )}
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <button
                    type="button"
                  //  onClick={handleForget}
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </button>
                </div>  
              </div>
              <div class="mt-2">
                <input
                  type="password"
                  {...register("password",{required: true})}
                  id="password"
                  autocomplete="current-password"
                 
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                 {errors.password?.type === "required" && (
                  <p className="text-red-600">Please Enter a password</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="my-4">
            <button
              onClick={handleGoogle}
              className="btn  bg-white border-gray-500 text-xl font-medium w-full"
            >
              <FcGoogle /> Google
            </button>
          </div>
          <p class="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <Link
              to={"/signup"}
              class="font-semibold text-indigo-600 hover:text-indigo-500 ml-2"
            >
              Create a new account.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;