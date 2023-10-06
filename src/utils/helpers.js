export const addressFormatting = (address) => {
  const array = address.split(",");
  array.splice(0, 1);

  return array;
};