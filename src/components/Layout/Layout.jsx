import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  return (
    <>
      <Navigation />
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
