import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCars } from "./carsOperations";

const initialState = {
  cars: [],
  isLoading: false,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, { payload }) => {
        state.cars = [...state.cars, ...payload];
        state.isLoading = false;
      })
      .addCase(getCars.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.cars = payload;
        state.isLoading = false;
      })
      .addCase(getAllCars.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const carsReducer = carsSlice.reducer;
