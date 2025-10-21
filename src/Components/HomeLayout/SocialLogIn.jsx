import React from "react";

const SocialLogIn = () => {
  return (
    <div>
      <h2 className="mb-3 font-bold">Login With</h2>
      <div className=" space-y-3">
        <button className="btn w-full btn-secondary btn-outline">
          Login with Google
        </button>
        <button className="btn w-full btn-primary">Login with gitHub</button>
      </div>
    </div>
  );
};

export default SocialLogIn;
