jest.mock('../src/api');

import { getBookTitle } from '../src/books';

test('Test getting a javascript book title', () => {
  expect.assertions(1);
  return getBookTitle('javascript').then(title => {
    expect(title.toLowerCase()).toContain('javascript');
  });
});
