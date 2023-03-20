import React from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  updateDishData,
  selectDishData,
} from "../store/features/dishDataSlice";
import { toast } from "react-toastify";

const InputStyled = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.light};
  outline: 0;
  border-radius: 0.7rem;
  display: block;
  width: 100%;
  min-height: 5rem;
  transition: border-color 0.25s ease 0s;
  font-size: ${({ theme }) => theme.sizes.s};
  margin-top: 0.5rem;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weights.medium};
  font-family: inherit;
`;

const FormRowStyled = styled.div`
  margin-top: 1.5rem;
`;

const LabelStyled = styled.label`
  padding: 1.5rem 0;
`;

const FormStyled = styled.form`
  max-width: 520px;
  width: 100%;
  margin: auto;
`;

const SelectStyled = styled.select`
  border: 2px solid ${({ theme }) => theme.colors.light};
  outline: 0;
  border-radius: 0.7rem;
  display: block;
  width: 100%;
  min-height: 5rem;
  transition: border-color 0.25s ease 0s;
  font-size: ${({ theme }) => theme.sizes.s};
  margin-top: 0.5rem;
  padding: 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.weights.medium};
  font-family: inherit;
`;

const ButtonStyled = styled.button`
  font-size: ${({ theme }) => theme.sizes.s};
  font-weight: ${({ theme }) => theme.weights.medium};
  font-family: inherit;
  padding: 2rem;
  margin: 2rem 0 0 0;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.light};
  border: ${({ theme }) => `1px solid ${theme.colors.light}`};
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InfoStyled = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.sizes.xs};
  margin: 0.4rem 0 0 0;
`;

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
      .then((response) => {
        const notify = () => toast("Wow so easy!");
        return response ?? notify();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
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
          <InfoStyled>hh:mm:ss</InfoStyled>
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
              <InfoStyled>Number of slices (1-8)</InfoStyled>
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
              <InfoStyled>Diameter range (20cm-40cm)</InfoStyled>
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
      </FormStyled>
    </div>
  );
};

export default DishForm;
