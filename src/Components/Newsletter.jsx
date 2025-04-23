import React from "react";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div  className="space-y-2 mt-[100px]  bg-accent  py-[100px]  text-center" id="newsletter">
      <h3 className="font-bold text-4xl">Sign up for our Monthly Newsletter!</h3>
      <p className="font-semibold pb-10">
        Want to be updated with new visa news
      </p>
      <Link to={'/signUp'} className="btn btn-wide bg-primary">Register Now</Link>
    </div>
  );
};

export default Newsletter;
