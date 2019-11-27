import fetch from 'node-fetch';

export function findBook() {
  const url = `http://localhost:3000/volumes`;
  return fetch(url)
    .then(response => response.json())
    .then(json => json.items[0]);
}
