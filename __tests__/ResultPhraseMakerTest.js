const ResultPhraseMaker = require('../src/utils/ResultPhraseMaker');

describe('ResultPhraseMaker 테스트', () => {
  test.each([
    [{ strike: 3, ball: 0 }, '3스트라이크'],
    [{ strike: 1, ball: 2 }, '2볼 1스트라이크'],
    [{ strike: 0, ball: 1 }, '1볼'],
    [{ strike: 0, ball: 0 }, '낫싱'],
  ])('결과 문구 생성 메서드 makeResultPhrase 검증', (result, phrase) => {
    const test = ResultPhraseMaker.makeResultPhrase(result);

    expect(test).toEqual(phrase);
  });
});
