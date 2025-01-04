import React, { memo, useState } from "react";
import "./style.css"; // Import the CSS file

const FlipCard = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="flip-card-container">
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flip-card-front">
          <div>

          <div className="icon mb-3">{icon}</div>
          <div>

          <h3 className="title text-lg font-semibold mb-2">{title}</h3>
          </div>
          </div>
        </div>
        <div className="flip-card-back">
          <p className="description font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(FlipCard);



