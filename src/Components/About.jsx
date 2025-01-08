import Lottie from "lottie-react";
import React from "react";
import Animationdata from "../assets/Animation - 1736348051255.json"

const About = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 text-left p-12">
        <div className="space-y-3 my-auto">
          <h3 className="font-medium text-3xl">For the Love of Reading</h3>
          <div>
            <h6 className="font-semibold py-2">Selection</h6>
            <p>
              We have more than 13 million titles to choose from, from the
              earliest board books to the all-time classics of literature.
            </p>
          </div>
          <div>
            <h6 className="font-semibold py-2">Purchasing Power</h6>
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
          <button className="btn bg-[#018574] text-white font-bold">More About Us</button>
        </div>
        <div >
            <Lottie animationData={Animationdata}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default About;
