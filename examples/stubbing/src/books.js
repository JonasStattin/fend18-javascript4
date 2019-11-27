import { findBook } from './api';

export function getBookTitle(query) {
  return findBook(query).then(book => book.volumeInfo.title);
}
