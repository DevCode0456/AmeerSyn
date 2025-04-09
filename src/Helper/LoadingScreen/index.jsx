import React from "react";
  import Images from "../ImagesConstant";

const LoadingScreen = () => (
  <div
    className="loadingOverlay blurBackground z-50 fixed top-0 border-0 left-0 w-full h-full"
  >
    <div
      className="loadingContent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24"
    >
      <img
        alt="loader"
        src={Images.LOADER}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-0"
      />
      {/* {props?.text && <p className="textYellow">{props?.text}</p>} */}
    </div>
  </div>
);

export default LoadingScreen;
