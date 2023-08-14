import React, { useEffect, useState } from "react";
import { getTimeLeft, intl } from "../../../utils/misc.utils";
import styles from "./ScheduleTimer.module.css";

const nextSession = {
  title: "Coding challange #1 - Wallet app UI",
  dateTime: new Date("2023-09-06T18:00"),
};

const ScheduleTimer = () => {
  const [remainingTime, setRemainingTime] =
    useState<ReturnType<typeof getTimeLeft>>();
  useEffect(() => {
    const interval = setInterval(
      () => setRemainingTime(getTimeLeft(nextSession.dateTime)),
      1000
    );
    console.log("timer");
    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = remainingTime ?? {};

  return (
    <div className={styles.container}>
      <div className={styles.groupContainer}>
        <h1>{nextSession.title}</h1>
        <span className={styles.sessionDate}>
          {intl.format(nextSession.dateTime)}
        </span>
      </div>
      <hr />
      <div className={styles.groupContainer}>
        <span>Sesiunea începe în:</span>
        <div className={styles.timerContainer}>
          <div className={styles.timerCell}>
            <span className={styles.timerCellValue}>{days}</span>
            <span className={styles.timerCellUnit}>zile</span>
          </div>
          <div className={styles.timerCell}>
            <span className={styles.timerCellValue}>{hours}</span>
            <span className={styles.timerCellUnit}>ore</span>
          </div>
          <div className={styles.timerCell}>
            <span className={styles.timerCellValue}>{minutes}</span>
            <span className={styles.timerCellUnit}>min</span>
          </div>
          <div className={styles.timerCell}>
            <span className={styles.timerCellValue}>{seconds}</span>
            <span className={styles.timerCellUnit}>sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTimer;
