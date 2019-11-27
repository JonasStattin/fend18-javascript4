import fetch from 'node-fetch';

export function findBook(query) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  return fetch(url)
    .then(response => response.json())
    .then(json => json.items[0]);
}
