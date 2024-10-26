import React, { useState } from "react";
import "../components/css/card-component.css";

const CardComponent = () => {
  const [isFlat, setIsFlat] = useState(false);

  return (
    <div className="card-container my-40">
      <div
        className={`card ${isFlat ? "flat" : ""}`}
        style={{
          transform: isFlat
            ? "perspective(200px) rotateX(0deg) translateZ(25px) translateY(5px)"
            : "perspective(200px) rotateX(35deg) translateZ(25px) translateY(5px)",
          transition: "transform 0.2s ease-out",
          width: "50rem",
          height: "300px",
        }}
        onMouseEnter={() => setIsFlat(true)}
        onMouseLeave={() => setIsFlat(false)}
      >
        <div className="card-content">
          <h1>Today's News</h1>
          <div className="advertisement">
            <h2>Introducing: The Bulletin</h2>
            <p>
              Stay informed with the latest headlines, in-depth articles, and
              special features. Subscribe to the Bulletin today for unparalleled
              coverage of world events, science, and technology.
            </p>
            <p>
              <strong>Subscribe now and get 50% off your first year!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
