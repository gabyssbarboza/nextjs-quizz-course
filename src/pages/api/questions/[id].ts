// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import allQuestions from "../dataQuestions";

export default function handler(req: any, res: any) {
  const selectedId = +req.query.id;

  const isThereQuestionOrNot = allQuestions.filter(
    (ques) => ques.id === selectedId
  );

  if (isThereQuestionOrNot.length === 1) {
    const selectedQuestion = isThereQuestionOrNot[0].randomAnswers();

    res.status(200).json(selectedQuestion.toLiteralObject());
  } else {
    res.status(204).send();
  }
}
