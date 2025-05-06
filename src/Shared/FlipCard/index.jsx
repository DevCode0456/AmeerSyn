import React, { useState } from "react";

const BookCard = ({ icon, title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-[340px] h-[220px] mx-auto my-6 "
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute w-full h-full bg-white text-primary rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <div className="text-4xl mb-2">{icon}</div>
          <h2 className="text-xl md:text-2xl font-semibold text-center">
            {title}
          </h2>
        </div>

        <div
          className="absolute w-full h-full bg-primary text-white rounded-3xl shadow-xl p-6 flex items-center justify-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <p className="text-sm md:text-base text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
