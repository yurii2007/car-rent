import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import { selectIsLoading } from "../../redux/selectors";
import { Loader } from "../Loader/Loader";

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Navigation />
      <main>
        <section className="max-w-[375px] md:max-w-[1024px] xl:max-w-[1440px] my-0 mx-auto">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </>
  );
};
