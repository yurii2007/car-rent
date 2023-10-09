import { useEffect } from "react";
import { ReactComponent as CloseBtn } from "../../images/svg/x.svg";
import { addressFormatting, formatMileage } from "../../utils/helpers";

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
      <div className="flex flex-col max-w-[320px] md:max-w-[768px] xl:max-w-[540px] md:p-[40px] relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[1000] rounded-[24px] bg-white p-[20px]">
        <button
          className="absolute top-[10px] md:top-[16px] right-[10px] md:right-[16px] z-10"
          onClick={() => closeModal(null)}
          type="button"
        >
          <CloseBtn fill="#111" width={24} height={24} />
        </button>
        <div className="relative md:w-[680px] md:h-[350px] xl:w-[470px] xl:h-auto rounded-[12px] overflow-hidden">
          <img src={car.img} alt={`${car.make} ${car.model}`} loading="lazy" />
        </div>
        <p className="mt-[12px] mb-[8px] text-[18px] leading-[24px] font-medium">
          {car.make}
          <span className="text-btn-primary">&nbsp;{car.model}&nbsp;</span>
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
        <p className="text-[14px] mt-[14px] leading-[20px]">
          {car.description}
        </p>
        <p className="mt-[18px] text-[14px] font-medium leading-[20px]">
          Accessories and functionalities:
        </p>
        <div className="mt-[8px] [&>*]:inline-block text-overlay/[0.5] [&>*]:border-r-[1px] [&>*]:border-overlay/[0.1] [&>*]:px-[6px] text-[12px] leading-[18px]">
          {car.accessories
            .slice(1, 3)
            .concat(car.functionalities.slice(1, 3))
            .map((el) => (
              <span className="last:border-r-0" key={el}>
                {el}
              </span>
            ))}
        </div>
        <p className="mt-[18px] text-[14px] font-medium leading-[20px]">
          Rental Conditions:
        </p>
        <div
          className="flex flex-wrap gap-[8px] mt-[8px]
         [&>p]:bg-background [&>p]:rounded-[35px] [&>p]:py-[7px] [&>p]:px-[10px] 
         [&>p]:font-semibold [&>p]:text-[12px] [&>p]:leading-[18px]"
        >
          {car.rentalConditions.split("\n").map((el) => (
            <p key={el}>{el}</p>
          ))}
          <p>
            Mileage:{" "}
            <span className="text-btn-primary">
              {formatMileage(car.mileage)}
            </span>
          </p>
          <p>
            Price: <span className="text-btn-primary">{car.rentalPrice}</span>
          </p>
        </div>
        <a
          className="block md:w-[168px] mt-[16px] xl:mt-[24px] py-[12px] bg-btn-primary hover:bg-btn-hover focus:bg-btn-hover rounded-[12px] text-white font-semibold text-center text-[14px] leading-[20px]"
          href="tel:+380730000000"
        >
          Rental Car
        </a>
      </div>
    </div>
  );
};
