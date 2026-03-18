import { useEffect, useRef, useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");

  const intervalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleStart = () => {
    if (intervalRef.current) return;

    setIsRunning(true);
    const startTime = Date.now() - time;

    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 10);
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setLaps([]);
    setLapName("");
  };

  const handleAddLap = () => {
    inputRef.current?.focus();

    if (!lapName.trim()) return;

    setLaps((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: lapName,
        time,
      },
    ]);

    setLapName("");
  };

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(ms % 1000).padStart(3, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 5 - Stopwatch</h2>

      <h1>{formatTime(time)}</h1>

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Lap name"
          value={lapName}
          onChange={(e) => setLapName(e.target.value)}
        />
        <button onClick={handleAddLap}>Add Lap</button>
      </div>

      <ul>
        {laps.map((lap) => (
          <li key={lap.id}>
            {lap.name} - {formatTime(lap.time)}
          </li>
        ))}
      </ul>
    </div>
  );
}
