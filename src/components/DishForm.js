import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateDishData,
  selectDishData,
} from "../store/features/dishDataSlice";

function DishForm() {
  const formData = useSelector(selectDishData);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            required
            value={formData.name}
            onChange={(event) => {
              dispatch(
                updateDishData({ field: "name", value: event.target.value })
              );
            }}
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="preparation_time">Preparation Time</label>
          <input
            required
            type="time"
            id="preparation_time"
            step={1}
            value={formData.preparation_time}
            onChange={(event) => {
              dispatch(
                updateDishData({
                  field: "preparation_time",
                  value: event.target.value,
                })
              );
            }}
          />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={formData.type}
            onChange={(event) => {
              dispatch(
                updateDishData({ field: "type", value: event.target.value })
              );
            }}
          >
            <option value="" disabled>
              Please select your Dish
            </option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </select>
        </div>
        {formData.type === "pizza" && (
          <>
            <div>
              <label htmlFor="no_of_slices">Number of Slices</label>
              <input
                required
                value={formData.no_of_slices}
                onChange={(event) =>
                  dispatch(
                    updateDishData({
                      field: "no_of_slices",
                      value: event.target.value,
                    })
                  )
                }
                type="number"
                id="no_of_slices"
                min="0"
              />
            </div>
            <div>
              <label htmlFor="diameter">Diameter</label>
              <input
                required
                value={formData.diameter}
                onChange={(event) =>
                  dispatch(
                    updateDishData({
                      field: "diameter",
                      value: event.target.value,
                    })
                  )
                }
                type="number"
                step="0.1"
                id="diameter"
                min="0"
              />
            </div>
          </>
        )}
        {formData.type === "soup" && (
          <div>
            <label htmlFor="spiciness_scale">Spiciness Scale</label>
            <input
              required
              value={formData.spiciness_scale}
              onChange={(event) =>
                dispatch(
                  updateDishData({
                    field: "spiciness_scale",
                    value: event.target.value,
                  })
                )
              }
              type="number"
              min="1"
              max="10"
              id="spiciness_scale"
            />
          </div>
        )}
        {formData.type === "sandwich" && (
          <div>
            <label htmlFor="slices_of_bread">Slices of Bread</label>
            <input
              required
              value={formData.slices_of_bread}
              onChange={(event) =>
                dispatch(
                  updateDishData({
                    field: "slices_of_bread",
                    value: event.target.value,
                  })
                )
              }
              type="number"
              id="slices_of_bread"
              min="0"
            />
          </div>
        )}
        <button type="submit">Send your Order</button>
      </form>
    </div>
  );
}

export default DishForm;
