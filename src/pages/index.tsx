import Button from "@/components/Button";
import Question from "@/components/Question";
import Quizz from "@/components/Quizz";
import MakeAnswer from "@/model/MakeAnswer";
import MakeQuestion from "@/model/MakeQuestion";
import { useEffect, useRef, useState } from "react";

const tstMock: MakeQuestion = new MakeQuestion(1, "Melhor Cor", [
  MakeAnswer.wrong("Verde"),
  MakeAnswer.wrong("Azul"),
  MakeAnswer.wrong("Roxo"),
  MakeAnswer.right("Vermelho"),
]);

export default function Home() {
  const [question, setQuestion] = useState(tstMock);
  const questionRef = useRef<MakeQuestion>();

  useEffect(() => {
    questionRef.current = question;
  }, [question]);

  function onUseAnswer(i: number) {
    setQuestion(question.answeredWith(i));
    console.log(question);
    console.log(i);
  }

  function onTimeOver() {
    if (question.isQuestionNotAnswered && questionRef.current) {
      setQuestion(questionRef.current.answeredWith(-1));
    }
  }

  function gotToNextStep() {}

  function onAnsweredEvent() {}

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "40px",
      }}
    >
      <Quizz
        question={question}
        answeredEvent={onAnsweredEvent}
        lastQuestion={true}
        gotToNextStep={gotToNextStep}
      />
    </div>
  );
}
