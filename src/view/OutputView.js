const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  START_PHRASE: '숫자 야구 게임을 시작합니다.',
  COMPLETE_PHRASE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',

  printStart() {
    Console.print(this.START_PHRASE);
  },

  printResult(resultPhrase) {
    Console.print(resultPhrase);
  },

  printComplete() {
    Console.print(this.COMPLETE_PHRASE);
  },
};

module.exports = OutputView;
