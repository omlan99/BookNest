import Lottie from "lottie-react";
import React from "react";
import Animationdata from "../assets/Animation - 1736348051255.json"
import { Link } from "react-router-dom";

const About = () => {
  return (
    
      <div className="grid lg:grid-cols-2 text-left gap-10 px-5 mt-[100px] pt-20 py-5" id="about">
        <div className="space-y-3 my-auto order-last lg:order-first">
          <h3 className="font-medium text-3xl">What We Have To Offer</h3>
          <div>
            <h6 className="font-semibold py-2">Selection</h6>
            <p>
              We have more than 13 million titles to choose from, from the
              earliest board books to the all-time classics of literature.
            </p>
          </div>
          <div>
            <h6 className="font-semibold py-2">Borrowing Power</h6>
            <p>
              Used books are often treasures that are out-of-print or rare. With
              Wish Lists you can choose to be notified the instant we find a
              copy, see how often we find rare titles, and see who else is
              interested.
            </p>
          </div>
          <div>
            <h6 className="font-semibold py-2">FREE Shipping & More</h6>
            <p>
              When you've found the books you want we'll ship qualifying orders
              to your door for FREE in 100% recyclable packaging. If there is no
              demand for a book, we will donate it to charity, or we'll recycle
              it.
            </p>
          </div>
          <div className="py-4">
            <Link to="/allBooks" className="btn bg-[#018574] text-white font-bold">See All Books</Link>
            </div>
        </div>
        <div classname="">
            <Lottie animationData={Animationdata}></Lottie>
        </div>
      </div>
    
  );
};

export default About;
