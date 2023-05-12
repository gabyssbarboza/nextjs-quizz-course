import Quizz from "@/components/Quizz";

import MakeQuestion from "@/model/MakeQuestion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const router = useRouter();

  const [ids, setIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<MakeQuestion>();
  const [rigth, setRigth] = useState<number>(0);

  async function loadingQuestionsIds() {
    const res = await fetch(`${BASE_URL}/survey`);
    const questionIds = await res.json();
    console.log(questionIds, "questionidsss");
    setIds(questionIds);
  }

  async function loadingQuestionsById(questionId: number) {
    const res = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await res.json();
    console.log(json, "jsoon");
    const newQuestion = MakeQuestion.createFromObject(json);
    setQuestion(newQuestion);
    console.log(MakeQuestion.createFromObject(json));
  }

  useEffect(() => {
    loadingQuestionsIds();
  }, []);

  useEffect(() => {
    ids.length > 0 && loadingQuestionsById(ids[0]);
  }, [ids]);

  function nextQuestionId() {
    if (question) {
      const nextID = ids.indexOf(question.id) + 1;
      return ids[nextID];
    }
  }

  function goToNextStep() {
    if (question) {
      const newId = nextQuestionId();
      newId ? gotToNextQuestion(newId) : finishTheQuizz();
    }
  }

  function gotToNextQuestion(newId: number) {
    loadingQuestionsById(newId);
  }

  function finishTheQuizz() {
    router.push({
      pathname: "/results",
      query: {
        total: ids.length,
        corrects: rigth,
      },
    });
  }

  function onAnsweredEvent(answeredQustion: MakeQuestion) {
    setQuestion(answeredQustion);
    const isAns = answeredQustion.isRight;
    setRigth(rigth + (isAns ? 1 : 0));
  }

  return (
    <>
      {question && (
        <Quizz
          question={question}
          answeredEvent={onAnsweredEvent}
          lastQuestion={nextQuestionId() === undefined}
          gotToNextStep={goToNextStep}
        />
      )}
    </>
  );
}
