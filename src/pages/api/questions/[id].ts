// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import allQuestions from "../dataQuestions";

export default function handler(req: any, res: any) {
  const selectedId = +req.query.id;

  const isThereQuestionOrNot = allQuestions.filter(
    (ques) => ques.id === selectedId
  );

  if (isThereQuestionOrNot.length === 1) {
    const selectedQuestion = isThereQuestionOrNot[0].randomAnswers();
    const obj = selectedQuestion.answeredWith(0).toLiteralObject();
    res.status(200).json(obj);
  } else {
    res.status(204).send();
  }
}
