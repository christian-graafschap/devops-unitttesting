const Authenticate = require('./Authenticate');

describe('Authenticate login', () => {
  let auth;

  beforeEach(() => {
    auth = new Authenticate();
  });

  test('should return true for correct username and password', () => {
    expect(auth.login('admin', '1234')).toBe(true);
  });

  test('should return false for incorrect username', () => {
    expect(auth.login('user', '1234')).toBe(false);
  });

  test('should return false for incorrect password', () => {
    expect(auth.login('admin', 'wrong')).toBe(false);
  });

  test('should return false for incorrect username and password', () => {
    expect(auth.login('user', 'wrong')).toBe(false);
  });

  test('should return false for empty username and password', () => {
    expect(auth.login('', '')).toBe(false);
  });
});
