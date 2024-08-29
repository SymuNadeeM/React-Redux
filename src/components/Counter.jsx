import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/actions/CounterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  console.log(count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div>
      <h2>All Counter are Here::</h2>
      <h3>Count : {count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
