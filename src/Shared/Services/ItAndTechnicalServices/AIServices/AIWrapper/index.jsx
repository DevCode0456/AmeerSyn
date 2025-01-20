import React, { memo } from "react";
import AIContent from "../AIContent";

const AIWrapper = () => {
  return (
    <div>
      <div className="container fluid ">
        <AIContent />
      </div>
    </div>
  );
};

export default memo(AIWrapper);
