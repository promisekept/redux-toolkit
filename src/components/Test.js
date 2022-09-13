import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { displayNum } from "../redux/features/counter.feature";

const Test = () => {
  const num = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <p>{num[0]}</p>
      <button onClick={() => dispatch(displayNum())}>displayNum</button>
    </>
  );
};

export default Test;
