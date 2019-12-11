Först behöver vi installera Jest
Vi måste också installera Babel för att kunna använda import/export

npm install --save-dev jest @babel/core @babel/preset-env

Vi lägger till vilken preset vi använder i package.json

  "babel": {
    "presets": ["@babel/env"]
  }

--- --- --- --- --- ---

Vi behöver ha något att testa, så vi skapar en sum.js i roten:

export function sum(a, b) {
  return a + b;
}

--- --- --- --- --- ---

Som vanligt så använder vi NPM som script runner, så vi lägger till jest i test-kommandot:

  "scripts": {
    "test": "jest"
  },

--- --- --- --- --- ---

Vi behöver också skriva ett test. 
Det är vanligt att skriva en testfil som en "spegel" av filen vi testar.
Vi skapar en sum.test.js i roten:

import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

