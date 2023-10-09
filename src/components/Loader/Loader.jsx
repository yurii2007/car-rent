import { useLottie } from "lottie-react";
import carAnimation from "../../images/animation/carCheck.json";

const style = {
  height: 250,
};

const LoaderAnimation = () => {
  const options = {
    animationData: carAnimation,
    loop: true,
  };
  const { View } = useLottie(options, style);
  return <>{View}</>;
};

export const Loader = () => {
  return (
    <div className="fixed top-0 w-screen h-screen bg-overlay/[0.5] z-[999]">
      <div className="relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[1000]">
        <LoaderAnimation />
      </div>
    </div>
  );
};
