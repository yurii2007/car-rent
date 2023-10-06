import { useEffect } from "react";
import { ReactComponent as CloseBtn } from "../../images/svg/x.svg";
import { addressFormatting } from "../../utils/helpers";

export const CarModal = ({ car, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, [closeModal]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal(null);
  };
  return (
    <div
      onClick={onBackdropClick}
      className="fixed top-0 w-screen h-screen bg-overlay/[0.5] z-[999]"
    >
      <div className="flex flex-col max-w-[320px] relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[1000] bg-white p-[20px]">
        <button
          className="absolute top-[16px] right-[16px]"
          onClick={() => closeModal(null)}
          type="button"
        >
          <CloseBtn fill="#111" width={24} height={24} />
        </button>
        <div className="relative">
          <img className="" src={car.img} alt={`${car.make} ${car.model}`} />
        </div>
        <p>
          {car.make}
          <span>{car.model}</span>
          {car.year}
        </p>
        <div className="mt-[8px] [&>*]:inline-block text-overlay/[0.5] [&>*]:border-r-[1px] [&>*]:border-overlay/[0.1] [&>*]:px-[6px] text-[12px] leading-[18px]">
          <span>{addressFormatting(car.address).join("")}</span>
          <span>Id: {car.id}</span>
          <span>Year: {car.year}</span>
          <span>Type: {car.type}</span>
          <span>Fuel Consumption: {car.fuelConsumption}</span>
          <span className="last:border-r-0">Engine Size: {car.engineSize}</span>
        </div>
        <p>{car.description}</p>
        <p>Accessories and functionalities:</p>
        <div className="mt-[8px] [&>*]:inline-block text-overlay/[0.5] [&>*]:border-r-[1px] [&>*]:border-overlay/[0.1] [&>*]:px-[6px] text-[12px] leading-[18px]">
          {car.accessories.concat(car.functionalities).map((el) => (
            <span className="last:border-r-0" key={el}>
              {el}
            </span>
          ))}
        </div>
        <p>Rental Conditions:</p>
        {car.rentalConditions.split("\n").map((el) => (
          <span key={el}>{el}</span>
        ))}
        <p>
          Mileage: <span>{car.mileage}</span>
        </p>
        <p>
          Price: <span>{car.rentalPrice}</span>
        </p>
        <a href="tel:+380730000000">Rental Car</a>
      </div>
    </div>
  );
};
