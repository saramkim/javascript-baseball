const { Console } = require('@woowacourse/mission-utils');
const Validator = require('../utils/Validator');

const InputView = {
  READ_ANSWER_PHRASE: '숫자를 입력해주세요 : ',
  READ_RESTART_PHRASE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',

  readAnswer() {
    Console.readLine(this.READ_ANSWER_PHRASE, (input) => {
      try {
        Validator.validateAnswer(input);
      } catch (error) {
        Console.print(error.message);
      }
    });
  },

  readRestart() {
    Console.readLine(this.READ_RESTART_PHRASE, (input) => {
        try {
            Validator.validateRestart(input);
          } catch (error) {
            Console.print(error.message);
          }
    });
  },
};

module.exports = InputView;
