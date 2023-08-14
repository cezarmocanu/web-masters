export const intl = new Intl.DateTimeFormat("ro-RO", {
  hour: "2-digit",
  minute: "2-digit",
  day: "numeric",
  month: "short",
  year: "numeric",
  weekday: "long",
});

export const getTimeLeft = (date: Date) => {
  const now = Date.now();

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  const diff = date.getTime() - now;
  const days = Math.floor(diff / DAY);
  const hours = Math.floor((diff - days * DAY) / HOUR);
  const minutes = Math.floor((diff - days * DAY - hours * HOUR) / MINUTE);
  const seconds = Math.floor(
    (diff - days * DAY - hours * HOUR - minutes * MINUTE) / SECOND
  );

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
