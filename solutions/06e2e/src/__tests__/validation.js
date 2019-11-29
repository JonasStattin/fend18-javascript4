import { validateEmail, validatePassword } from '../utils/validation';

it('passes on valid email', () => {
  const email = 'zero@cool.gg';
  expect(validateEmail(email)).toEqual(true);
});

it('fails on invalid email', () => {
  const email = 'zero.cool.gg';
  expect(validateEmail(email)).toEqual(false);
});

it('validates password: 8 chars, 1 uppercase, 1 digit', () => {
  const password = 'ValidateMePlease99';
  expect(validatePassword(password)).toEqual(true);
});

it('invalid password: missing digit', () => {
  const password = 'Validatemeplease';
  expect(validatePassword(password)).toEqual(false);
});

it('invalid password: missing 1 uppercase', () => {
  const password = 'validatemeplease99';
  expect(validatePassword(password)).toEqual(false);
});
