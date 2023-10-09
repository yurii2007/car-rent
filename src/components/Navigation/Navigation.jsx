import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Navigation = ({ isOpenNav, setOpenNav }) => {
  useEffect(() => {
    document.body.style.overflow = "visible";
    if (isOpenNav) document.body.style.overflow = "hidden";
  }, [isOpenNav]);

  return (
    <nav
      className={`absolute -left-[100%] flex ease-in-out duration-200 [&>.active]:underline ${
        isOpenNav
          ? "left-[0] top-0 z-10 flex-col gap-[24px] pt-[40px] pl-[20px] w-[70vw] bg-[#F9F9F9] h-screen"
          : ""
      } md:static gap-[18px]`}
    >
      <NavLink onClick={setOpenNav} className="hover:underline text-[20px] font-medium leading-[20px]" to="/">
        Home
      </NavLink>
      <NavLink onClick={setOpenNav} className="hover:underline text-[20px] font-medium leading-[20px]" to="/catalog">
        Catalog
      </NavLink>
      <NavLink onClick={setOpenNav} className="hover:underline text-[20px] font-medium leading-[20px]" to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};
