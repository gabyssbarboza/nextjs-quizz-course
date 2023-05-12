import { randomElements } from "@/utils/ArrayUtils";

export default class MakeAnswer {
  #value: string;
  #isOk: boolean;
  #isRevealed: boolean;

  constructor(value: string, isOk: boolean, isRevealed = false) {
    this.#value = value;
    this.#isOk = isOk;
    this.#isRevealed = isRevealed;
  }

  static right(value: string) {
    return new MakeAnswer(value, true);
  }

  static wrong(value: string) {
    return new MakeAnswer(value, false);
  }

  get value() {
    return this.#value;
  }

  get isOk() {
    return this.#isOk;
  }

  get isRevealed() {
    return this.#isRevealed;
  }

  doRevelation() {
    return new MakeAnswer(this.#value, this.#isOk, true);
  }

  static createFromObject(model: MakeAnswer): MakeAnswer {
    return new MakeAnswer(model.value, model.isOk, model.isRevealed);
  }

  convertToObject() {
    return {
      value: this.#value,
      isOk: this.#isOk,
      isRevealed: this.#isRevealed,
    };
  }
}
