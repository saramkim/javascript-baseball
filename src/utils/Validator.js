const AnswerMaker = require('./AnswerMaker');

const Validator = {
  ANSWER_TYPE_ERROR: '[ERROR] 정답은 숫자를 입력해야 합니다.',
  ANSWER_LENGTH_ERROR: '[ERROR] 정답은 세 자릿수 입력해야 합니다.',
  ANSWER_OVERLAB_ERROR: '[ERROR] 정답은 서로 다른 수를 입력해야 합니다.',
  ANSWER_RANGE_ERROR: '[ERROR] 정답은 1~9 범위의 숫자로 입력해야 합니다.',
  ANSWER_EXCEPTION_NUMBER: '0',

  RESTART_TYPE_ERROR: '[ERROR] 재시작 여부는 숫자를 입력해야 합니다.',
  RESTART_NUMBER_ERROR: '[ERROR] 재시작 여부는 1 혹은 2를 입력해야 합니다.',
  RESTART_NUMBER: '1',
  QUIT_NBUMBER: '2',

  validateAnswer(input) {
    if (isNaN(input)) throw new Error(this.ANSWER_TYPE_ERROR);
    if (input.length !== AnswerMaker.ANSWER_LENGTH)
      throw new Error(this.ANSWER_LENGTH_ERROR);
    if ([...new Set(input)].length !== AnswerMaker.ANSWER_LENGTH)
      throw new Error(this.ANSWER_OVERLAB_ERROR);
    if (input.includes(this.ANSWER_EXCEPTION_NUMBER))
      throw new Error(this.ANSWER_RANGE_ERROR);
  },

  validateRestart(input) {
    if (isNaN(input)) throw new Error(this.RESTART_TYPE_ERROR);
    if (input !== this.RESTART_NUMBER && input !== this.QUIT_NBUMBER)
      throw new Error(this.RESTART_NUMBER_ERROR);
  },
};

module.exports = Validator;
