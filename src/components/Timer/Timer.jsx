import React, { useMemo } from "react";

const Timer = ({ weddingDate = new Date().toString() }) => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    const parsedWeddingDate = React.useMemo(() => Date.parse(weddingDate), [weddingDate]);
    const [time, setTime] = React.useState(parsedWeddingDate - Date.now());

    React.useEffect(() => {
        const interval = setInterval(
            () => setTime(Date.now() - parsedWeddingDate), 1000
        );

        return () => clearInterval(interval);

    }, [parsedWeddingDate]);


  return (
    <div className="timer">
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60
      }).map(([label, value]) => (
        <div key={label} className="col-4">
          <div className="box">
            <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
            <span className="text">{label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timer