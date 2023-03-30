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

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const [ids, setIds] = useState([]);
  const [question, setQuestion] = useState<MakeQuestion>(tstMock);
  const questionRef = useRef<MakeQuestion>();

  async function loadingQuestionsIds() {
    const res = await fetch(`${BASE_URL}/survey`);
    const questionIds = await res.json();
    setIds(questionIds);
  }

  async function loadingQuestionsById(questionId: number) {
    const res = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await res.json();
    console.log("question json", json);
  }

  useEffect(() => {
    loadingQuestionsIds();
  }, []);

  useEffect(() => {
    ids.length > 0 && loadingQuestionsById(ids[0]);
  }, [ids]);

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
    <Quizz
      question={question}
      answeredEvent={onAnsweredEvent}
      lastQuestion={true}
      gotToNextStep={gotToNextStep}
    />
  );
}
