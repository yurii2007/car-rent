import { useDispatch } from "react-redux";
import { addressFormatting } from "../../utils/helpers";
import { addCarToFavorites } from "../../redux/favorite/favoriteOperation"

export const CarItem = ({ carInfo }) => {
  const dispatch = useDispatch();

  const onAddClick = car => dispatch(addCarToFavorites(car))

  return (
    <li className="flex flex-col w-[270px]">
      <div className="relative">
        <img src={carInfo.img} alt={`${carInfo.make} ${carInfo.model}`} />
        <button onClick={()=>onAddClick(carInfo)} type="button">Red heart</button>
      </div>
      <div className="flex justify-between">
        <p>
          {carInfo.make}
          <span className="color-aquamarine">{carInfo.model}</span>
          {carInfo.year}
        </p>
        <p>{carInfo.rentalPrice}</p>
      </div>
      <div>
        {addressFormatting(carInfo.address).map((el) => (
          <span key={el}>{el}</span>
        ))}
        <span>{carInfo.rentalCompany}</span>
        {carInfo.accessories.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </div>
      <button type="button">Learn More</button>
    </li>
  );
};
