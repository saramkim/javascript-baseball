const Validator = require('../src/utils/Validator');

describe('Validator 테스트', () => {
  test.each([['일이삼'], ['19'], ['111'], ['019']])(
    '정답 입력값 유효성 검증 메서드 validateAnswer 검증',
    (input) => {
      expect(() => Validator.validateAnswer(input)).toThrow();
    }
  );

  test.each([['일'], ['0'], ['12']])(
    '재시작 여부 입력값 유효성 검증 메서드 validateRestart 검증',
    (input) => {
      expect(() => Validator.validateRestart(input)).toThrow();
    }
  );
});
