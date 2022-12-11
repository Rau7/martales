import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(2023, 4, 30).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left

  var days = Math.floor(countDown / (1000 * 60 * 60 * 24));

  const month = Math.floor(days / 30) - 1;
  days = days - 5 * 30;
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [month, days, hours, minutes, seconds];
};

export { useCountdown };
