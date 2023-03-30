import React from "react";
import styles from "../styles/QuestionHeading.module.css";

interface QuestionMessageProps {
  txt: string;
}

const QuestionMessage = ({ txt }: QuestionMessageProps) => {
  return (
    <div className={styles.questionHeadingContainer}>
      <h2 className={styles.questionHeading}>{txt} </h2>
    </div>
  );
};

export default QuestionMessage;
