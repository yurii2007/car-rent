import { createSlice } from "@reduxjs/toolkit";
import {
  addCarToFavorites,
  getCarDetails,
  removeCarFromFavorites,
} from "./favoriteOperation";

const initialState = {
  isLoading: false,
  carsList: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarDetails.fulfilled, (state, { payload }) => {
        // state.carsId = payload;
        state.isLoading = false;
      })
      .addCase(getCarDetails.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addCarToFavorites, (state, { payload }) => {
        state.carsList.push(payload);
      })
      .addCase(removeCarFromFavorites, (state, { payload }) => {
        state.carsList = state.carsList.filter((car) => car.id !== payload);
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
