import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CarsList } from "../components/CarsList/CarsList";
import { resetCarsStore } from "../redux/cars/carsOperations";

const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCarsStore());
  });

  return (
    <>
      <CarsList isFavorite={true} />
    </>
  );
};

export default Favorites;
