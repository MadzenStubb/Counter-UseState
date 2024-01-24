import React from "react";
import "../Stylesheets/Counter.css";

const Counter = ({ numClicks }) => {
  return (
  <main className="counter">
    {numClicks}
    </main>
);
};

export default Counter;
