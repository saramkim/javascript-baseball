const ResultCalculator = {
  calculate(input, answer) {
    const result = { strike: 0, ball: 0 };
    answer.forEach((number, idx) => {
      if (number === Number(input[idx])) result.strike++;
      else if (input.includes(number)) result.ball++;
    });
    return result;
  },
};

module.exports = ResultCalculator;
