import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCarsStore } from "../redux/cars/carsOperations";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCarsStore());
  });

  return <div> Home</div>;
};

export default Home;
