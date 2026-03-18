import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 2 - Digital Clock</h2>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}
