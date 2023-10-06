import { createSlice } from "@reduxjs/toolkit";
import { addCarToFavorites, getCarDetails } from "./favoriteOperation";

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
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
