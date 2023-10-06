import { useEffect } from "react";
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
      <div className="flex flex-col w-[270px] relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[1000] bg-white p-[40px]">
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
        <button className="bg-btn-primary" onClick={() => closeModal(null)} type="button">
          Close
        </button>
      </div>
    </div>
  );
};
