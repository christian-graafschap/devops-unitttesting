const Sum = require('./sum');

describe('Authenticate login', () => {
  const sum = new Sum();
  test('should return correct sum', () => {
    expect(sum.add(3, 5)).toBe(8);
  });
});
