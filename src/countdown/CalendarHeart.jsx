import React from "react";

const CalendarHeart = () => {
  return (
    <div style={styles.container}>
      {/* Title */}
      <h2 style={styles.title}>FEBRUARY 2026</h2>

      {/* Calendar Grid */}
      <div style={styles.grid}>
        {/* Days Header */}
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div key={day} style={styles.headerCell}>
            {day}
          </div>
        ))}

        {/* Feb 1, 2026 is a Sunday. 
           So we start counting from the first cell.
        */}
        {Array.from({ length: 28 }, (_, i) => {
          const dayNum = i + 1;
          const isSpecialDate = dayNum === 26;

          return (
            <div key={dayNum} style={styles.cell}>
              <span style={{ position: "relative", zIndex: 1 }}>{dayNum}</span>

              {/* The Hand-Drawn Heart Overlay */}
              {isSpecialDate && (
                <svg
                  viewBox="0 0 100 100"
                  style={styles.heartSvg}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 50,90 C 20,70 0,40 20,20 C 35,5 50,30 50,30 C 50,30 65,5 80,20 C 100,40 80,70 50,90 Z"
                    fill="none"
                    stroke="#D93025" // The red color
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// CSS-in-JS styles to match the image exactly
const styles = {
  container: {
    fontFamily: "'Courier New', Courier, monospace", // The typewriter look
    textAlign: "center",
    background: "#fff",
    padding: "40px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  title: {
    fontSize: "24px",
    letterSpacing: "2px",
    marginBottom: "30px",
    fontWeight: "bold",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "15px", // Space between numbers
  },
  headerCell: {
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  cell: {
    position: "relative",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: "#333",
  },
  heartSvg: {
    position: "absolute",
    top: "-5px",
    left: "-5px",
    width: "140%", // Make it slightly larger than the number
    height: "140%",
    zIndex: 0,
    transform: "rotate(-10deg)", // Slight tilt for realism
    pointerEvents: "none",
  },
};

export default CalendarHeart;
