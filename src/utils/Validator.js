const AnswerMaker = require('./AnswerMaker');

const Validator = {
  ANSWER_TYPE_ERROR: '[ERROR] 정답은 숫자를 입력해야 합니다.',
  ANSWER_LENGTH_ERROR: '[ERROR] 정답은 세 자릿수 입력해야 합니다.',
  ANSWER_OVERLAB_ERROR: '[ERROR] 정답은 서로 다른 수를 입력해야 합니다.',
  ANSWER_RANGE_ERROR: '[ERROR] 정답은 1~9 범위의 숫자로 입력해야 합니다.',

  validateAnswer(input) {
    if (isNaN(input)) throw new Error(ANSWER_TYPE_ERROR);
    if (input.length !== AnswerMaker.ANSWER_LENGTH) throw new Error(ANSWER_LENGTH_ERROR);
    if ([...new Set(input)].length !== AnswerMaker.ANSWER_LENGTH)
      throw new Error(ANSWER_OVERLAB_ERROR);
    if (input.includes('0')) throw new Error(ANSWER_RANGE_ERROR);
  },
};

module.exports = Validator;
