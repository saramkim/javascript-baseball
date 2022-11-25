const { Random } = require('@woowacourse/mission-utils');

const AnswerMaker = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 9,
  ANSWER_LENGTH: 3,

  generateRandomNumber() {
    return Random.pickNumberInRange(
      this.RANDOM_LOWER_INCLUSIVE,
      this.RANDOM_UPPER_INCLUSIVE
    );
  },

  makeAnswer() {
    const answer = [];
    while (answer.length < this.ANSWER_LENGTH) {
      const randomNumber = this.generateRandomNumber();
      if (!answer.includes(randomNumber)) answer.push(randomNumber);
    }
    return answer;
  },
};

module.exports = AnswerMaker;
