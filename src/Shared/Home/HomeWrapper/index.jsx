import React, { memo } from "react";
import HomeContent from "../HomeContent";

const HomeWrapper = () => {
  return (
    <div className=" mx-auto ">
      <HomeContent />
    </div>
  );
};

export default memo(HomeWrapper);
