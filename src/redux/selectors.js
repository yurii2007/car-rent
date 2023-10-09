import { createSelector } from "@reduxjs/toolkit";

const selectState = (state) => state;

export const selectCars = createSelector([selectState], (state) => {
  return state.cars.cars;
});

export const selectFavorites = (state) => state.favorites.carsList;

export const selectIsLoading = (state) => state.cars.isLoading;
