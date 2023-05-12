import MakeAnswer from "@/model/MakeAnswer";
import styles from "../styles/Answer.module.css";
interface AnswersProps {
  value: MakeAnswer;
  // index is used for return
  index: number;
  letter: string;
  letterbg: string;
  onUseAnswer: (index: number) => void;
}

const Answers = (props: AnswersProps) => {
  const answers = props.value;
  const isReveleadAns = answers.isRevealed ? styles.isReveleadAns : "";
  return (
    <div
      className={styles.answer}
      onClick={() => props.onUseAnswer(props.index)}
    >
      <div className={`${isReveleadAns} ${styles.answerContent}`}>
        <div className={styles.answerCardFront}>
          <div
            className={styles.letter}
            style={{ backgroundColor: props.letterbg }}
          >
            {props.letter}
          </div>
          <div className={styles.values}>{answers.value}</div>
        </div>

        <div className={styles.answerCardBack}>
          {answers.isOk ? (
            <div className={styles.rigthAnswer}>
              <div>A resposta certa é...</div>
              <div className={styles.txtAnswer}>{answers.value}</div>
            </div>
          ) : (
            <div className={styles.wrongAnswer}>
              <div>A resposta informada está errada...</div>
              <div className={styles.txtAnswer}>{answers.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Answers;
