import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Countdown.module.css";

interface CountdownProps {
  duraction: number;
  timeOver: () => void;
  key: number;
}

export const Countdown = (props: CountdownProps) => {
  const { duraction, timeOver } = props;

  return (
    <div className={styles.countContainer}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={duraction}
        onComplete={timeOver}
        colors={["#BCE596", "#f7b801", "#ed827a"]}
        colorsTime={[9, 6, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};
