import * as api from '../src/api';
import { getBookTitle } from '../src/books';

api.findBook = jest.fn(function findBook(query) {
  return new Promise((resolve, reject) => {
    resolve({ volumeInfo: { title: 'JavaScript: The Good Parts' } });
  });
});

test('Test getting a javascript book title', () => {
  expect.assertions(1);
  return getBookTitle('javascript').then(title => {
    expect(title.toLowerCase()).toContain('javascript');
  });
});
