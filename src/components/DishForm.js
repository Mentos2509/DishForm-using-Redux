import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateDishData,
  selectDishData,
  resetDishData,
} from "../store/features/dishDataSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  InputStyled,
  FormStyled,
  LabelStyled,
  FormRowStyled,
  SelectStyled,
  ButtonStyled,
  InfoStyled,
  ContainerStyled,
} from "../styles/DishFormStyles";

const DishForm = () => {
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
      .then((data) => {
        if (data.id) {
          toast.success("Thank you for your Dish", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-message",
          });
          dispatch(resetDishData());
        } else {
          toast.error("Submitted dish was rejected", {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-message",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.success("There was an error with your order", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast-message",
        });
      });
  };

  return (
    <ContainerStyled>
      <FormStyled onSubmit={handleSubmit}>
        <FormRowStyled>
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <InputStyled
            required
            placeholder="Name of the dish"
            value={formData.name || ""}
            onChange={(event) => {
              dispatch(
                updateDishData({ field: "name", value: event.target.value })
              );
            }}
            type="text"
            id="name"
          />
        </FormRowStyled>
        <FormRowStyled>
          <LabelStyled htmlFor="preparation_time">Preparation Time</LabelStyled>
          <InputStyled
            required
            type="time"
            id="preparation_time"
            step={1}
            value={formData.preparation_time || ""}
            onChange={(event) => {
              dispatch(
                updateDishData({
                  field: "preparation_time",
                  value: event.target.value,
                })
              );
            }}
          />
          <InfoStyled>Insert the time in format hh:mm:ss</InfoStyled>
        </FormRowStyled>
        <FormRowStyled>
          <LabelStyled htmlFor="type">Type</LabelStyled>
          <SelectStyled
            id="type"
            value={formData.type || ""}
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
          </SelectStyled>
        </FormRowStyled>

        {formData.type === "pizza" && (
          <>
            <FormRowStyled>
              <LabelStyled htmlFor="no_of_slices">Number of Slices</LabelStyled>
              <InputStyled
                required
                value={formData.no_of_slices || ""}
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
                min="1"
                max="20"
              />
              <InfoStyled>Choose number of slices (1-8)</InfoStyled>
            </FormRowStyled>
            <FormRowStyled>
              <LabelStyled htmlFor="diameter">Diameter</LabelStyled>
              <InputStyled
                required
                value={formData.diameter || ""}
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
                min="20"
                max="40"
              />
              <InfoStyled>Choose diameter (20cm-40cm)</InfoStyled>
            </FormRowStyled>
          </>
        )}

        {formData.type === "soup" && (
          <FormRowStyled>
            <LabelStyled htmlFor="spiciness_scale">Spiciness Scale</LabelStyled>
            <InputStyled
              required
              value={formData.spiciness_scale || ""}
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
            <InfoStyled>Choose spiciness from (1-10)</InfoStyled>
          </FormRowStyled>
        )}

        {formData.type === "sandwich" && (
          <FormRowStyled>
            <LabelStyled htmlFor="slices_of_bread">Slices of Bread</LabelStyled>
            <InputStyled
              required
              value={formData.slices_of_bread || ""}
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
              max="10"
            />
            <InfoStyled>Choose number of bread slices (0-10)</InfoStyled>
          </FormRowStyled>
        )}
        <ButtonStyled type="submit">Send your Order</ButtonStyled>
        <ToastContainer />
      </FormStyled>
    </ContainerStyled>
  );
};

export default DishForm;
