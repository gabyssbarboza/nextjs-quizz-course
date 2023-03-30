import MakeQuestion from "@/model/MakeQuestion";
import styles from "../styles/Quizz.module.css";
import Button from "./Button";
import Question from "./Question";

interface QuizzProps {
  question: MakeQuestion;
  lastQuestion: boolean;
  answeredEvent: (question: MakeQuestion) => void;
  gotToNextStep: () => void;
}

const Quizz = (props: QuizzProps) => {
  function onUseAnswer(i: number) {
    if (props.question.isQuestionNotAnswered) {
      props.answeredEvent(props.question.answeredWith(i));
    }
  }

  return (
    <div className={styles.quizz}>
      {props.question ? (
        <>
          {" "}
          <Question
            value={props.question}
            timeOver={props.gotToNextStep}
            onUseAnswer={onUseAnswer}
            timeForResponse={10}
          />
          <Button
            onClick={props.gotToNextStep}
            txt={props.lastQuestion ? "Finalizar" : "Próxima Questão"}
          />
        </>
      ) : null}
    </div>
  );
};

export default Quizz;
