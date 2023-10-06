import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./carsOperations";

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
      });
  },
});

export const carsReducer = carsSlice.reducer;
