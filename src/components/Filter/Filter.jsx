import Select from "react-select";
import { ReactComponent as ArrowUp } from "../../images/svg/arrowUp.svg";
import { ReactComponent as ArrowDown } from "../../images/svg/arrowDown.svg";
import { makes } from "../../constants/makes";
import { generatePricesArr } from "../../utils/helpers";
import {
  customPriceSelectStyles,
  customMakeSelectStyles,
} from "./CustomSelectStyles";
import { useState } from "react";

export const Filter = ({ setFilter, onSubmit }) => {
  const [isDisplaySearch, setDisplaySearch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { make, mileageFrom, mileageTo, rentalPrice } = e.target.elements;
    const filters = {
      make: make.value || '',
      rentalPrice: +rentalPrice.value || 100000,
      mileageFrom: +mileageFrom.value || 0,
      mileageTo: +mileageTo.value || 100000,
    };
    setFilter(filters)
    onSubmit();
  };

  const onClickSearch = () => {
    setDisplaySearch(!isDisplaySearch);
  };

  return (
    <>
      <button
        onClick={onClickSearch}
        type="button"
        className="md:hidden p-[10px] mx-auto flex gap-[8px] my-[10px] bg-btn-primary hover:bg-btn-hover rounded-[12px] text-white font-semibold text-center text-[14px] leading-[20px]"
      >
        {isDisplaySearch ? "Close filters" : "Open filters"}
        {isDisplaySearch ? (
          <ArrowUp width={20} height={20} />
        ) : (
          <ArrowDown width={20} height={20} />
        )}
      </button>
      <form
        className={`${
          isDisplaySearch
            ? "flex flex-col items-center px-[25px] gap-y-[8px] pb-[10px]"
            : "hidden"
        }  md:flex gap-[14px] xl:gap-[18px] max-w-[570px] xl:max-w-[860px] mx-auto mb-[50px]`}
        onSubmit={handleSubmit}
      >
        <div className="w-[95%] md:w-auto [&>label]:block flex justify-between gap-[8px] md:gap-[14px] xl:gap-[18px]">
          <label>
            <Select
              name="make"
              placeholder="Enter the text"
              options={makes}
              styles={customMakeSelectStyles}
            />
          </label>
          <label>
            <Select
              name="rentalPrice"
              placeholder="To $"
              options={generatePricesArr().map((price) => ({
                value: price,
                label: `$${price}`,
              }))}
              styles={customPriceSelectStyles}
            />
          </label>
        </div>
        <div className="flex divide-x-[1px] w-[95%] md:w-[200px] xl:w-[320px] divide-[#8A8A8933] rounded-[14px] overflow-hidden text-[14px] md:text-[16px] xl:text-[18px] leading-[20px] font-medium text-overlay">
          <label>
            <input
              className="bg-background h-[100%] p-[10px] xl:pl-[24px] w-[100%] placeholder:text-overlay focus:outline-btn-primary"
              type="number"
              name="mileageFrom"
              placeholder="From"
            />
          </label>
          <label>
            <input
              className="bg-background h-[100%] p-[10px] xl:pl-[24px] w-[100%] placeholder:text-overlay focus:outline-btn-primary"
              type="number"
              name="mileageTo"
              placeholder="To"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-[95%] md:w-[136px] xl:px-[44px] xl:w-auto py-[12px] bg-btn-primary hover:bg-btn-hover focus:bg-btn-hover rounded-[12px] text-white font-semibold text-center text-[14px] leading-[20px]"
        >
          Search
        </button>
      </form>
    </>
  );
};
