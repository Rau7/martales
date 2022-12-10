import React from "react";
import DateTimeDisplay from "../DateTimeDisplay";
import { useCountdown } from "../useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ months, days, hours, minutes }) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={months} type={"Mesi"} isDanger={false} />
      <DateTimeDisplay value={days} type={"Giorni"} isDanger={false} />
      <DateTimeDisplay value={hours} type={"Ore"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"Minuti"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [months, days, hours, minutes] = useCountdown(targetDate);

  if (days + hours + minutes <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        months={months}
        days={days}
        hours={hours}
        minutes={minutes}
      />
    );
  }
};

export default CountdownTimer;
