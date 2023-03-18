import React from "react";
import { useSelector } from "react-redux";

function DishForm() {
  const dishData = useSelector((state)=> state.dishData.value)
  console.log(dishData)
  
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">name</label>
          <input
            required
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="preparation_time">Preparation Time</label>
          <input required type="time" id="preparation_time" step={1} />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <select id="type" >
            <option value='' disabled >Please select your Dish</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default DishForm;
