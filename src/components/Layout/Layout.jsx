import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/selectors";
import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <Header />
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
