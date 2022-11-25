const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  READ_ANSWER_PHRASE: '숫자를 입력해주세요 : ',

  readAnswer() {
    Console.readLine(this.READ_ANSWER_PHRASE, (input) => {});
  },
};

module.exports = InputView;
