import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFavorites } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CarItem } from "../CarItem/CarItem";
import { getCars } from "../../redux/cars/carsOperations";
import { Filter } from "../Filter/Filter";
import { applyFilters } from "../../utils/helpers";

export const initialFilters = {
  make: "",
  rentalPrice: 100000,
  mileageFrom: 0,
  mileageTo: 10000000,
};

export const CarsList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cars = useSelector(
    location.pathname.includes("favorite") ? selectFavorites : selectCars
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    dispatch(getCars(currentPage));
  }, [dispatch, currentPage]);

  const onClickLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const carToRender = applyFilters(cars, filters);

  return (
    <>
      <Filter setFilter={setFilters} />
      <ul className="flex justify-center flex-row flex-wrap gap-y-[20px] gap-x-[29px]">
        {carToRender?.map((car) => (
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
