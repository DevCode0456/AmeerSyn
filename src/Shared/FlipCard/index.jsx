import React, { memo, useState } from "react";
import "./style.css";

const FlipCard = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-card-container">
      <div
        className={`flip-card rounded-3xl  ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className="flip-card-front bg-gradient-to-tr from-secondary to-varientColor rounded-3xl">
          <div className="icon">{icon}</div>
          <h1 className="title font-semibold md:text-4xl">{title}</h1>
        </div>

        <div className="flip-card-back bg-gradient-to-br from-primary to-container rounded-3xl">
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(FlipCard);
