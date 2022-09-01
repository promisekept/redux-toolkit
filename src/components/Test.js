import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const num = useSelector((state) => {
    console.log("state counter in Test.js: " + state.counter);
    return state.counter;
  });
  console.log(num);
  return <div>tst</div>;
};

export default Test;
