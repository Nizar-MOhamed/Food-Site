import React, { useContext } from "react";
import "./foodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItems/foodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoodList = food_list.filter(
    (list) => list.category === category
  );

  const foodList = category === "All" ? food_list : filteredFoodList;

  return (
    <div className="food-display" id="food_display">
      <h2>Top dishes near you </h2>
      <div className="food-display-list">
        {foodList.map((items, index) => (
          <FoodItem
            key={index}
            id={items._id}
            name={items.name}
            descreption={items.descreption}
            price={items.price}
            image={items.image}
          />
        ))}
      </div>
    </div>
  );
};
export default FoodDisplay;
