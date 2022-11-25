const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  START_PHRASE: '숫자 야구 게임을 시작합니다.',

  printStart() {
    Console.print(this.START_PHRASE);
  },
};

module.exports = OutputView;
