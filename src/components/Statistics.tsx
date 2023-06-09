import React from "react";
import styles from "../styles/Statistics.module.css";

interface StatisticsProps {
  value: any;
  text: string;
  bgColor?: string;
  fontColor?: string;
}

const Statistics = (props: StatisticsProps) => {
  return (
    <div className={styles.statisticsContainer}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.bgColor ?? "#fdd60f",
          color: props.fontColor ?? "#333",
        }}
      >
        {props.value}
      </div>
      <div className={styles.txt}>{props.text}</div>
    </div>
  );
};

export default Statistics;
