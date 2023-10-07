import { makes } from "../../constants/makes";
import { generatePricesArr } from "../../utils/helpers";

export const Filter = ({ setFilter, filters }) => {
  const onChange = (e) => {
    setFilter((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === "make" ? e.target.value : +e.target.value,
    }));
  };

  return (
    <div>
      <label>
        <select onChange={onChange} name="make">
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </label>
      <label>
        <select onChange={onChange} name="rentalPrice">
          {generatePricesArr().map((el) => (
            <option key={el} value={el}>
              &#36;{el}
            </option>
          ))}
        </select>
      </label>
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
