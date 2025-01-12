import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div  className="space-y-2 py-10 bg-[#f4f0ef] mb-10 text-center">
      <h3 className="font-bold text-4xl">Sign up for our Monthly Newsletter!</h3>
      <p className="font-semibold pb-10">
        Want to be updated with new visa news
      </p>
      <Link to={'/signUp'} className="btn btn-wide bg-[#018567] text-white">Register Now</Link>
    </div>
  );
};

export default Newsletter;
