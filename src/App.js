const BaseballGame = require('./model/BaseballGame');
const AnswerMaker = require('./utils/AnswerMaker');
const ResultPhraseMaker = require('./utils/ResultPhraseMaker');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #game;

  play() {
    const answer = AnswerMaker.makeAnswer();
    this.#game = new BaseballGame(answer);
    OutputView.printStart();
    InputView.readAnswer(this);
  }

  compare(input) {
    const result = this.#game.calculate(input);
    const resultPhrase = ResultPhraseMaker.makeResultPhrase(result);
    OutputView.printResult(resultPhrase);

    if (this.#game.isCorrect(input)) {
      OutputView.printComplete();
      InputView.readRestart(this);
    } else InputView.readAnswer(this);
  }
}

module.exports = App;
