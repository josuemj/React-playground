import "./Timer.css";
export function Timer() {
  const MAX_HOURS = 99;
  const MAX_MINUTES = 59;
  const MAX_SECONDS = 59;
  const MIN_VALUE = 0;

  return (
    <>
      <section className="timer-section">
        <h1>Timer</h1>

        <div className="timer">
          <div className="display">00 : 00 : 00</div>
          <div className="inputs">
            <label>
              Hours:{" "}
              <input
                name="hours"
                type="number"
                max={MAX_HOURS}
                min={MIN_VALUE}
              />
            </label>

            <label>
              Minutes:{" "}
              <input
                name="minutes"
                type="number"
                max={MAX_MINUTES}
                min={MIN_VALUE}
              />
            </label>

            <label>
              Seconds:{" "}
              <input
                name="seconds"
                type="number"
                max={MAX_SECONDS}
                min={MIN_VALUE}
              />
            </label>
          </div>

          <div className="buttons">
            <button className="start-btn">Start</button>
            <button className="stop-btn">Stop</button>
            <button className="reset-btn">Reset</button>
          </div>
        </div>
      </section>
    </>
  );
}
