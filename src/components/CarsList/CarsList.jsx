import { useEffect, useState } from "react";
import { getCars } from "../../utils/mockapi";
import { CarItem } from "../CarItem/CarItem";

export const CarsList = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getCars();
      setCars(response);
    })();
  }, []);

  return (
    <ul className="flex flex-row flex-wrap gap-y-[50px] gap-x-[29px]">
      {cars?.map((car) => (
        <CarItem key={car.id} carInfo={car}/>
      ))}
    </ul>
  );
};
