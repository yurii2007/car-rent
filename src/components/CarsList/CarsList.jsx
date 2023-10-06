import { useDispatch, useSelector } from "react-redux";
import { CarItem } from "../CarItem/CarItem";
import { selectCars } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { getCars } from "../../redux/cars/carsOperations";

export const CarsList = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCars(currentPage));
  }, [dispatch, currentPage]);

  const onClickLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ul className="flex flex-row flex-wrap gap-y-[50px] gap-x-[29px]">
        {cars?.map((car) => (
          <CarItem key={car.id} carInfo={car} />
        ))}
      </ul>
      {currentPage > 3 ? null : (
        <button type="button" onClick={onClickLoadMore}>
          Load More
        </button>
      )}
    </>
  );
};
