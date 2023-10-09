export const addressFormatting = (address) => {
  const array = address.split(",");
  array.splice(0, 1);

  return array;
};

export const generatePricesArr = (maxPrice = 150) => {
  const result = [];

  for (let i = 0; i <= maxPrice; i += 10) {
    result.push(i);
  }

  return result;
};

export const applyFilters = (cars, filters) => {
  const filterValues = Object.entries(filters);
  return cars.filter((car) => {
    return (
      car[filterValues[0][0]].includes(filterValues[0][1]) &&
      parseFloat(car[filterValues[1][0]].replace("$", "")) <=
        filterValues[1][1] &&
      car.mileage >= filterValues[2][1] &&
      car.mileage <= filterValues[3][1]
    );
  });
};

export const formatMileage = (mileage) => {
  const res = mileage.toString().split("");
  res.splice(-3, 0, ",");
  return res.join("");
};
