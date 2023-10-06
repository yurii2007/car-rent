import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { addressFormatting } from "../../utils/helpers";

export const FavoritesList = () => {
  const cars = useSelector(selectFavorites);

  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id} className="flex flex-col w-[270px]">
          <div className="relative">
            <img src={car.img} alt={`${car.make} ${car.model}`} />
          </div>
          <div className="flex justify-between">
            <p>
              {car.make}
              <span className="color-aquamarine">{car.model}</span>
              {car.year}
            </p>
            <p>{car.rentalPrice}</p>
          </div>
          <div>
            {addressFormatting(car.address).map((el) => (
              <span key={el}>{el}</span>
            ))}
            <span>{car.rentalCompany}</span>
            {car.accessories.map((el) => (
              <span key={el}>{el}</span>
            ))}
          </div>
          <button type="button">Learn More</button>
        </li>
      ))}
    </ul>
  );
};
