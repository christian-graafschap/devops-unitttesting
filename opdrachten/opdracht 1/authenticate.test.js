const Authenticate = require('./authenticate');

describe('Login en authenticatie', () => {
  const auth = new Authenticate();

 test('succesvolle login met valide credentials', () => {
    expect(auth.login('admin', '1234')).toBe(true);
  });

  // foutieve username

  // foutief password

  // foutieve username en password

  // username en password leeg

});
