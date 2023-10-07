import Select from "react-select";
import { makes } from "../../constants/makes";
import { generatePricesArr } from "../../utils/helpers";
import {
  customPriceSelectStyles,
  customMakeSelectStyles,
} from "./CustomSelectStyles";

export const Filter = ({ setFilter }) => {
  const onChange = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === "make" ? e.target.value : +e.target.value,
    }));
  };

  return (
    <div className="px-[25px] py-[20px]">
      <div className="[&>label]:block flex justify-between gap-[8px]">
        <label className="max-w-[190px] md:max-w-[250px]">
          <Select
            name="make"
            placeholder="Enter the text"
            onChange={(e) => {
              onChange({ target: { value: e.value, name: "make" } });
            }}
            options={makes}
            styles={customMakeSelectStyles}
          />
        </label>
        <label>
          <Select
            name="rentalPrice"
            placeholder="To $"
            onChange={(e) => {
              onChange({ target: { value: e.value, name: "rentalPrice" } });
            }}
            options={generatePricesArr().map((price) => ({
              value: price,
              label: `$${price}`,
            }))}
            styles={customPriceSelectStyles}
          />
        </label>
      </div>
      <label>
        <input
          className="bg-black text-white"
          onChange={onChange}
          type="number"
          name="mileageFrom"
        />
      </label>
      <label>
        <input
          className="bg-black text-white"
          onChange={onChange}
          type="number"
          name="mileageTo"
        />
      </label>
    </div>
  );
};
