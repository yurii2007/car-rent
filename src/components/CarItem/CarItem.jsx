import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ReactComponent as Heart } from "../../images/svg/heart.svg";
import { addressFormatting } from "../../utils/helpers";
import {
  addCarToFavorites,
  removeCarFromFavorites,
} from "../../redux/favorite/favoriteOperation";
import { CarModal } from "../CarModal/CarModal";
import { selectFavorites } from "../../redux/selectors";

export const CarItem = ({ carInfo }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [modalCar, setModalCar] = useState(null);

  const isInFavorites = (id) => {
    return favorites.map((el) => el.id).includes(id);
  };

  const onLearnMoreClick = (car) => setModalCar(car);

  const onAddClick = (car) => {
    if (isInFavorites(car.id)) return dispatch(removeCarFromFavorites(car.id));
    else dispatch(addCarToFavorites(car));
  };

  return (
    <>
      {modalCar ? <CarModal car={modalCar} closeModal={setModalCar} /> : null}
      <li className="flex flex-col justify-between w-[270px]">
        <div className="relative rounded-[12px] overflow-hidden">
          <img
            className="w-[274px] h-[228px]"
            src={carInfo.img}
            alt={`${carInfo.make} ${carInfo.model}`}
          />
          <button
            className="absolute top-[14px] right-[14px] border-none bg-transparent"
            onClick={() => onAddClick(carInfo)}
            type="button"
          >
            <Heart
              className={`w-[18px] h-[18px] ${
                isInFavorites(carInfo.id)
                  ? "fill-btn-primary [&>g>path]:stroke-transparent"
                  : ""
              }  `}
            />
          </button>
        </div>
        <div className="flex justify-between mt-[14px] font-medium text-[16px] leading-[24px]">
          <p>
            {carInfo.make}&nbsp;
            <span className="text-btn-primary">{carInfo.model}</span>,&nbsp;
            {carInfo.year}
          </p>
          <p>{carInfo.rentalPrice}</p>
        </div>
        <div className="mt-[8px] [&>*]:inline-block text-overlay/[0.5] [&>*]:border-r-[1px] [&>*]:border-overlay/[0.1] [&>*]:px-[6px] text-[12px] leading-[18px]">
          <span>{addressFormatting(carInfo.address).join("")}</span>
          <span>{carInfo.rentalCompany}</span>
          {carInfo.accessories.map((el) => (
            <span className="last:border-r-0" key={el}>
              {el}
            </span>
          ))}
        </div>
        <button
          onClick={() => onLearnMoreClick(carInfo)}
          className="mt-[16px] py-[12px] bg-btn-primary hover:bg-btn-hover rounded-[12px] text-white font-semibold text-center text-[14px] leading-[20px]"
          type="button"
        >
          Learn More
        </button>
      </li>
    </>
  );
};
