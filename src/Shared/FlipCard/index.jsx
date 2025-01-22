import React, { memo, useState } from "react";
import "./style.css"; 

const FlipCard = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="flip-card-container rounded-lg ">
      <div 
        className={`flip-card rounded-3xl ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flip-card-front rounded-3xl w-full">
          <div>

          <div className="icon mb-3 flex justify-center">{icon}</div>
          <div>

          <h3 className="title text-lg font-semibold mb-2">{title}</h3>
          </div>
          </div>
        </div>
        <div className="flip-card-back bg rounded-3xl px-3">
          <p className="description font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(FlipCard);



