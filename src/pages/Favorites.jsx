import { CarsList } from "../components/CarsList/CarsList";

const Favorites = () => {
  return (
    <>
      <CarsList isFavorite={true} />
    </>
  );
};

export default Favorites;
