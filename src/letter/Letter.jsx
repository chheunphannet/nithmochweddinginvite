import React from 'react'
import './Letter.css'
import { useState } from 'react'

const Letter = ({ insideLetter, cover ,backCover}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="card"
      onClick={handleOpen}
      style={{
        transform: isOpen && "perspective(2000px) rotateZ(-10deg)",
      }}
    >
      <div
        className="cover"
        style={{
          transform: isOpen && "rotateY(-135deg)",
        }}
      >
        <img
          src={backCover}
          alt="cover book image"
          style={{
            // width: "300px", height: "430px", borderRadius: "10px"
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backfaceVisibility: "hidden",
            borderRadius: "10px",
            zIndex: "1",
          }}
        />
        <img
          src={cover}
          alt="backface book image"
          // loading="lazy"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // backfaceVisibility: "hidden",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          }}
        />
      </div>
      <div className="content">
        <img
          src={insideLetter}
          alt="leter"
          style={{ width: "245px", height: "345px", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default Letter
