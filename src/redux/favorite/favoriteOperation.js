import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { getCarById } from "../../utils/mockapi";

export const getCarDetails = createAsyncThunk(
  "favorites/getCarById",
  async (carsId, thunkApi) => {
    try {
      const response = await Promise.all(carsId.map((id) => getCarById(id)));
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCarToFavorites = createAction("favorites/addCar", car => ({payload: car}));