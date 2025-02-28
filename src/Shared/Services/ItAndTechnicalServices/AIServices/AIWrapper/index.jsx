import React, { memo } from "react";
import AIContent from "../AIContent";

const AIWrapper = () => {
  return (
    <div>
    <div className="m-0 p-0 ">
    <AIContent />
      </div>
    </div>
  );
};

export default memo(AIWrapper);
