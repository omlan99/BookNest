import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const SignUp = () => {
  const { createUser, updateUser, setUser, googleSignIn } = useContext(AuthContext)
  const {register, handleSubmit, formState: {errors}} = useForm()
  const navigate = useNavigate();


  const onSubmit =(data) =>{
    // console.log(data)
    createUser(data.email, data.password)
    .then(result=> {
      updateUser(data.name, data.photoUrl)
      .then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signed Up Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
    })
    .catch(error =>{
      toast.error(error.message)
    })
  })
  }
  const handleGoogle = () => {
    googleSignIn()
    navigate("/");
  }
  

 
  
 
  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
       
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight">
            Create a new account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                for="email"
                class="block text-sm/6 font-medium text-left"
              >
                User Name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="name"
                  {...register('name', {required: true})}
                
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600">Please Enter Your Name </p>
                )}
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm/6 font-medium text-left"
              >
                Upload a profile Photo
              </label>
              <div class="mt-2">
                <input
                  type="url"
                  name="photo"
                  {...register("photo", {required : true})}
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-600">Please Enter URL of Your Photo</p>
                )}
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm/6 font-medium text-left"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  type="email"
                  name="email"
                  {...register("email",{required:true})}
                  id="email"
                  autocomplete="email"
                  
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                  class="block text-sm/6 font-medium"
                >
                  Password
                </label>
              </div>
              <div class="mt-2 relative">
                <input
                  type="password"
                  name="password"
                  {...register("password",{required: true, pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/, minLength: 6})}
                  id="password"
                  autocomplete="current-password"
                
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                 {errors.password?.type === "required" && (
                  <p className="text-red-600">Please Enter a password</p>
                )}
                {errors.password?.type === "min" && (
                  <p className="text-red-600">
                    Please Enter at least 6 character{" "}
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Please Enter at least one uppercase and one lowercase and
                    one special character{" "}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
               
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
          <div className="my-4">
            <button
              onClick={handleGoogle}
              className="btn  border-gray-500 text-xl font-medium w-full"
            >
              <FcGoogle /> Google
            </button>
          </div>
          <p class="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account.
            <Link
              to={"/login"}
              class="font-semibold text-indigo-600 hover:text-indigo-500 ml-2"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;  