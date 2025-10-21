import React from "react";
import swimming from "../../assets/swimming.png";
import playground from "../../assets/playground.png";
import classes from "../../assets/class.png";

const QZone = () => {
  return (
    <div>
      <h2 className="font-bold mb-4">Q-Zone</h2>
      <div className="space-y-8">
        <img src={swimming} alt="" />
        <img src={classes} alt="" />
        <img src={playground} alt="" />
      </div>
    </div>
  );
};

export default QZone;
<h2>Q-Zone</h2>;
