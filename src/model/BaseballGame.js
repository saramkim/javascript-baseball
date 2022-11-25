class BaseballGame {
  #answer;

  constructor(answer) {
    this.#answer = answer;
  }

  calculate(input) {
    const result = { strike: 0, ball: 0 };
    this.#answer.forEach((number, idx) => {
      if (number === Number(input[idx])) result.strike++;
      else if (input.includes(number)) result.ball++;
    });
    return result;
  }

  isCorrect(input) {
    return this.#answer.join('') === input;
  }
}

module.exports = BaseballGame;
