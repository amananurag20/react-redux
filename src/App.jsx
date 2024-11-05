import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./store/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeItem());
  };
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>; App
    </div>
  );
};

export default App;
