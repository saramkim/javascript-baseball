const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const InputView = {
  READ_ANSWER_PHRASE: '숫자를 입력해주세요 : ',

  readAnswer() {
    Console.readLine(this.READ_ANSWER_PHRASE, (input) => {
      try {
        Validator.validateAnswer(input);
      } catch (error) {
        Console.print(error.message);
      }
    });
  },
};

module.exports = InputView;
