import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFavorites } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CarItem } from "../CarItem/CarItem";
import { getCars } from "../../redux/cars/carsOperations";

export const CarsList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const cars = useSelector(
    location.pathname.includes("favorite") ? selectFavorites : selectCars
  );

  useEffect(() => {
    dispatch(getCars(currentPage));
  }, [dispatch, currentPage]);

  const onClickLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ul className="flex justify-center flex-row flex-wrap gap-y-[20px] gap-x-[29px]">
        {cars?.map((car) => (
          <CarItem key={car.id} carInfo={car} />
        ))}
      </ul>
      {location.pathname.includes("favorite") || currentPage > 3 ? null : (
        <button
          onClick={onClickLoadMore}
          className="mt-[40px] mb-[10px] mx-auto block text-btn-primary hover:text-btn-hover focus:text-btn-hover font-medium text=[16px] leading-[24px] underline decoration-solid"
          type="button"
        >
          Load More
        </button>
      )}
    </>
  );
};
