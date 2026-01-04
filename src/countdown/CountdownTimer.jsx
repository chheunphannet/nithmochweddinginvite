import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("January 23, 2026 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeRemaining = {};

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeRemaining;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Oswald, Arial" }}>
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
        {timeLeft.seconds}s
      </div>
      {timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0 && <p>The Wedding has started!</p>}
        <p className="event-info">
            Which Will Be Held<br />
            On Friday 23<sup>rd</sup> January 2026, At 5:00 P.m,
        </p>
    </div>
  );
};

export default CountdownTimer;
