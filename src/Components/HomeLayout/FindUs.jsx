import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold my-5" >FindUs On</h2>
      <div className=" join join-vertical w-full  space-y-4 ">
        <button className="btn bg-base-100 w-full join-item justify-start">
         <FaFacebook/> Facebook
        </button>
        <button className="btn bg-base-100 join-item justify-start">
         <FaTwitter/> Twitter
        </button>
        <button className="btn bg-base-100 join-item justify-start">
         <FaInstagram/> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
