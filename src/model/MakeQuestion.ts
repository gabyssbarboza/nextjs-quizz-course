import { randomElements } from "@/utils/ArrayUtils";
import MakeAnswer from "./MakeAnswer";

export default class MakeQuestion {
  #id: number;
  #message: string;
  #answers: MakeAnswer[];
  #isRight: boolean;

  //   #isAnswered: boolean;

  constructor(id: number, message: string, answers: any[], isRight = false) {
    this.#id = id;
    this.#answers = answers;
    this.#isRight = isRight;
    this.#message = message;
  }

  get id() {
    return this.#id;
  }

  get message() {
    return this.#message;
  }

  get isRight() {
    return this.#isRight;
  }

  get answer() {
    return this.#answers;
  }

  get isQuestionAnswered() {
    for (let answer of this.#answers) {
      if (answer.isRevealed) return true;
    }
    return false;
  }

  get isQuestionNotAnswered() {
    return !this.isQuestionAnswered;
  }

  answeredWith(index: number): MakeQuestion {
    const done = this.#answers[index]?.isOk;
    const newanwser = this.#answers.map((res, i) => {
      const isSelectedAns = index === i;
      const haveToReveal = isSelectedAns || res.isOk;
      return haveToReveal ? res.doRevelation() : res;
    });

    return new MakeQuestion(this.#id, this.#message, newanwser, done);
  }

  randomAnswers(): MakeQuestion {
    let ranAnswer = randomElements(this.#answers);

    return new MakeQuestion(this.#id, this.#message, ranAnswer, this.#isRight);
  }

  toLiteralObject() {
    return {
      id: this.#id,
      message: this.#message,
      isAnswered: this.isQuestionAnswered,
      isRight: this.#isRight,
      answers: this.#answers.map((resp) => resp.convertToObject()),
    };
  }
}
