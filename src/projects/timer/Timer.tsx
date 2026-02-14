import { useRef, useState } from "react";
import "./Timer.css";
export function Timer() {
  const MAX_HOURS = 99;
  const MAX_MINUTES = 59;
  const MAX_SECONDS = 59;
  const MIN_VALUE = 0;

  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const intervalRef = useRef<number>(0);

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = 0;
  };

  const resetTimer = () => {
    stopTimer();
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <>
      <section className="timer-section">
        <h1>Timer</h1>

        <div className="timer">
          <div className="display">
            {hours} : {minutes} : {seconds}
          </div>
          <div className="inputs">
            <label>
              Hours:{" "}
              <input
                name="hours"
                type="number"
                max={MAX_HOURS}
                min={MIN_VALUE}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
            </label>

            <label>
              Minutes:{" "}
              <input
                name="minutes"
                type="number"
                max={MAX_MINUTES}
                min={MIN_VALUE}
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
              />
            </label>

            <label>
              Seconds:{" "}
              <input
                name="seconds"
                type="number"
                max={MAX_SECONDS}
                min={MIN_VALUE}
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="buttons">
            <button className="start-btn" onClick={startTimer}>
              Start
            </button>
            <button className="stop-btn" onClick={stopTimer}>Stop</button>
            <button className="reset-btn" onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </section>
    </>
  );
}
