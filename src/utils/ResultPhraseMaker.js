const ResultPhraseMaker = {
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',

  makeResultPhrase({ strike, ball }) {
    let result = ball + this.BALL + ' ' + strike + this.STRIKE;

    if (ball === 0 && strike === 0) result = this.NOTHING;
    else if (strike === 0) result = ball + this.BALL;
    else if (ball === 0) result = strike + this.STRIKE;

    return result;
  },
};

module.exports = ResultPhraseMaker;
