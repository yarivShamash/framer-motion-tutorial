import React from "react";
import { Link } from "react-router-dom";
import StepContainer from "./StepContainer";
import AnimatedListItem from "./AnimatedListItem";
import AnimatedButton from "./AnimatedButton";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <StepContainer className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <AnimatedListItem key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </AnimatedListItem>
          );
        })}
      </ul>

      <Link to="/order">
        <AnimatedButton>Order</AnimatedButton>
      </Link>
    </StepContainer>
  );
};

export default Toppings;
