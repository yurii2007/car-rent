import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="hidden md:flex">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};
