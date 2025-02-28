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
        {/* Front Side */}
        <div className="flip-card-front bg-gradient-to-r from-pink-500 to-primary rounded-3xl">
          <div className="icon">{icon}</div>
          <h1 className="title font-semibold md:text-4xl">{title}</h1>
        </div>

        {/* Back Side */}
        <div className="flip-card-back bg-gradient-to-r from-red-500 to-secondary rounded-3xl">
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(FlipCard);
