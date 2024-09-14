"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width = "100%", height = "100%" }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      height: height,
      width: width,
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
