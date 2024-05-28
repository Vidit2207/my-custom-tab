import React, { useEffect, useState } from "react";
let secondBgGradient, minuteBgGradient, hourBgGradient;
const NeonDigitalClock = () => {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const h = new Date().getHours();
      const m = new Date().getMinutes();
      const s = new Date().getSeconds() + 1;
      setHour(h);
      setMinute(m);
      setSecond(s);
      secondBgGradient = `conic-gradient(#ffcc00 ${
        (s / 60) * 360
      }deg, transparent ${(s / 60) * 360}deg)`;
      minuteBgGradient = `conic-gradient(#00ff00 ${
        (m / 60) * 360
      }deg, transparent ${(m / 60) * 360}deg)`;
      hourBgGradient = `conic-gradient(#ff0066 ${
        (h / 24) * 360
      }deg, transparent ${(h / 24) * 360}deg)`;
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return (
    <div className="neon-digital-clock">
      <div className="neon-digital-clock__dial neon-digital-clock__hour"
       style={{ backgroundImage: hourBgGradient }}>
        <p className="neon-digital-clock__text">{hour}</p>
      </div>


      <div className="neon-digital-clock__dial neon-digital-clock__minute"
       style={{ backgroundImage: minuteBgGradient }}>
        <p className="neon-digital-clock__text">{minute}</p>
      </div>


      <div
        className="neon-digital-clock__dial neon-digital-clock__second"
        style={{ backgroundImage: secondBgGradient }}
      >
        <p className="neon-digital-clock__text">{second}</p>
      </div>
    </div>
  );
};

export default NeonDigitalClock;
