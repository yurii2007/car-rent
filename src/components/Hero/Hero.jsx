import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="py-[100px] md:py-[150px] bg-hero-bg bg-cover bg-no-repeat">
      <h1 className="text-white leading-[40px] text-[36px] text-center">
        Rent Car Service
      </h1>
      <Link
        className="block w-[169px] mx-auto mt-[20px] py-[12px] bg-btn-primary hover:bg-btn-hover focus:bg-btn-hover rounded-[12px] text-white font-semibold text-center text-[14px] leading-[20px]"
        to="/catalog"
      >
        Go to our Catalog
      </Link>
    </section>
  );
};
