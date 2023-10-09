import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCarsStore } from "../redux/cars/carsOperations";
import { Hero } from "../components/Hero/Hero";
import { Description } from "../components/Description/Description";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCarsStore());
  });

  return (
    <>
      <Hero />
      <Description />
    </>
  );
};

export default Home;
