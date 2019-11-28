>Exempel-app byggd med [`create-react-app`](https://github.com/facebookincubator/create-react-app) för integrations- och snapshot-testning. Appen hämtar växlingskurs från en lokal [json-server](https://github.com/typicode/json-server) och visar datan i en lista. Den har också en uppdateringsknapp som kan testas separat. **CSS-ramverket är [Tailwind](https://tailwindcss.com/)**

Projektet är förberett med ett antal paket för att testa React-komponenter: [**`enzyme`**](http://airbnb.io/enzyme/docs/api/), `enzyme-adapter-react-16`, `react-test-renderer` samt `enzyme-to-json` för snapshot.testning. 

## Installation
Ställ dig i rotfoldern och kör `yarn` eller `npm install`

## Kolla på projektet
Starta projektet med `yarn start` eller `npm run start`
Kolla på projektet på `localhost:3000` för att se hur applikationen beter sig. 

## Kör tester
Jest kör alla tester som finns i `__test__`-mappar, eller filer döpta enligt mönstret `*.test.js`

Kör igenom testerna en gång:
`yarn test` eller `npm run test`

Kolla test coverage:
`yarn test --coverage` eller `npm run test -- --coverage`

# Övningsuppgifter

## Nå 100% test coverage!