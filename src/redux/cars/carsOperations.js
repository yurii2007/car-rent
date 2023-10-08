import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCars } from "../../utils/mockapi";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async (page = 1, thunkApi) => {
    try {
      const response = await fetchCars(page);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllCars = createAsyncThunk(
  "cars/getAllCars",
  async (_, thunkApi) => {
    try {
      const res = await fetchAllCars();
      return res;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
