import MakeQuestion from "@/model/MakeQuestion";
import React from "react";
import styles from "../styles/Question.module.css";
import Answers from "./Answers";
import { Countdown } from "./Countdown";
import QuestionMessage from "./QuestionMessage";

interface QuestionProps {
  value: MakeQuestion;
  onUseAnswer: (index: number) => void;
  timeOver: () => void;
  timeForResponse?: number;
}

const letters = [
  {
    value: "A",
    color: "#f2c866",
  },
  {
    value: "B",
    color: "#f266ba",
  },
  {
    value: "C",
    color: "#85d4f2",
  },
  {
    value: "D",
    color: "#bce596",
  },
];

const Question = (props: QuestionProps) => {
  const question = props.value;

  function renderAnswers() {
    console.log("hhhhh", "question", question);

    return question?.answer?.map((ans, i) => {
      console.log(ans, "aisiajsiajsj");
      return (
        <Answers
          key={`${question.id}-${i}`}
          value={ans}
          index={i}
          letter={letters[i].value}
          letterbg={letters[i].color}
          onUseAnswer={props.onUseAnswer}
        />
      );
    });
  }

  return (
    <div className={styles.question}>
      <QuestionMessage txt={question.message} />
      <Countdown
        key={question.id}
        duraction={props.timeForResponse ?? 10}
        timeOver={props.timeOver}
      />

      {renderAnswers()}
    </div>
  );
};

export default Question;
