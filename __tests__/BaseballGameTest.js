const BaseballGame = require('../src/model/BaseballGame');

describe('BaseballGame 클래스 테스트', () => {
  const answer = [1, 2, 3];
  const game = new BaseballGame(answer);

  test.each([
    ['123', { strike: 3, ball: 0 }],
    ['321', { strike: 1, ball: 2 }],
    ['345', { strike: 0, ball: 1 }],
    ['789', { strike: 0, ball: 0 }],
  ])('결과 계산 메서드 calulate 검증', (input, result) => {
    const test = game.calculate(input);

    expect(test).toEqual(result);
  });

  test.each([
    ['123', true],
    ['321', false],
    ['345', false],
    ['789', false],
  ])('일치 여부 확인 메서드 isCorrect 검증', (input, result) => {
    const test = game.isCorrect(input);

    expect(test).toEqual(result);
  });
});
