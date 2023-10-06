import axios from "axios";

const LIMIT_PER_PAGE = 8;

const instance = axios.create({
  baseURL: "https://651f9edf906e276284c342e4.mockapi.io/api/v1/adverts",
});

export const getCars = async (page = 1) => {
  instance.defaults.params = {
    page,
    limit: LIMIT_PER_PAGE,
  };

  const response = await instance.get();
  return response.data;
};
