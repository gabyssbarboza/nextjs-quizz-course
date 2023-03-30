import { randomElements } from "@/utils/ArrayUtils";
import allQuestions from "../dataQuestions";

export default (req: any, res: any) => {
  const ids = allQuestions.map((quest) => quest.id);
  res.status(200).json(randomElements(ids));
};
