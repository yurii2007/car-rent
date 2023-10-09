import { ReactComponent as Logo } from "../../images/svg/logo.svg";
import burgerMenu from "../../images/animation/burgerAnim.json";
import Lottie from "lottie-react";
import { Navigation } from "../Navigation/Navigation";
import { useRef, useState } from "react";

const style = {
  width: 32,
  height: 32,
};

export const Header = () => {
  const lottieRef = useRef();
  const [isOpenNav, setOpenNav] = useState(false);

  const onBurgerClick = () => {
    setOpenNav(!isOpenNav);
    isOpenNav
      ? lottieRef.current.setDirection(-1)
      : lottieRef.current.setDirection(1);
    lottieRef.current.play();
    setTimeout(() => {
      lottieRef.current.pause();
    }, 1000);
  };

  return (
    <header>
      <div className="flex justify-between items-center py-[28px] px-[16px] max-w-[375px] md:max-w-[1024px] xl:max-w-[1440px] my-0 mx-auto">
        <Logo width={40} height={40} />
        <Lottie
          onClick={onBurgerClick}
          lottieRef={lottieRef}
          animationData={burgerMenu}
          autoplay={false}
          loop={false}
          style={style}
          className="md:hidden"
        />
        <Navigation />
      </div>
    </header>
  );
};
