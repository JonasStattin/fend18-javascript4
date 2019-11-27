# unit-test-exercise

Skriv unit-tester för den här todo-applikationen. Koden som skall testas finns i `src`-mappen, och alla tester skall ligga i `__tests__/todo.js`. Testa gärna att lägga till mer funktionalitet i appen och skriv tester för det. 

** Innan du skriver tester, identifiera alla use cases du vill testa **
Applikationen skall klara av att:
* lägga till en ny todo
* ta bort en todo
* ta bort alla todos
* ändra en todo
* varna om användaren försöker ta bort en todo som inte finns

Skriv tester baserat på de use cases du identifierar. 

## Installation
Ställ dig i rotfoldern och kör `yarn` eller `npm install`

## Kör tester
Jest kör alla tester som finns i `__test__`-mappar, eller filer döpta enligt mönstret `*.test.js`

Kör igenom testerna en gång:
`yarn test` eller `npm run test`

Kör testerna i "watch"-läge (kör när antingen källfilen eller testfilen sparas):
`yarn test:watch` eller `npm run test:watch`

## Om Jest

Instatieringar i Jest blir globala. Det här innebär att förändringar i testobjektet blir "sparade" under hela testsviten. För att se till att varje test körs isolerade från de andra behöver man köra `resetModules()` innan varje test:

```js
beforeEach(() => {
  jest.resetModules();
});
```

Samt importera  objektet i varje test:

```js
test('returns all todos', () => {
  const todoList = require('../src/todoList');
  expect(todoList.getAllTodos()).toHaveLength(3);
});
```
