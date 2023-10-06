import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <main>
      <section className="max-w-[375px] md:max-w-[1024px] xl:max-w-[1440px] my-0 mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      </section>
      </main>
    </>
  );
};
