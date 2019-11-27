# jest-react-testing

>Exempel-app byggd med [`create-react-app`](https://github.com/facebookincubator/create-react-app) för integrations- och snapshot-testning. Appen hämtar växlingskurs från en lokal [json-server](https://github.com/typicode/json-server) och visar datan i en lista. Den har också en uppdateringsknapp som kan testas separat. **CSS-ramverket är [Tailwind](https://tailwindcss.com/)**

Projektet är förberett med ett antal paket för att testa React-komponenter: [**`enzyme`**](http://airbnb.io/enzyme/docs/api/), `enzyme-adapter-react-16`, `react-test-renderer` samt `enzyme-to-json` för snapshot.testning. 

## Installation
Ställ dig i rotfoldern och kör `yarn` eller `npm install`

## Kolla på projektet
Starta projektet med `yarn start:serve` eller `npm run start:serve`
Kolla på projektet på `localhost:3000` för att se hur applikationen beter sig. 

## Kör tester
Jest kör alla tester som finns i `__test__`-mappar, eller filer döpta enligt mönstret `*.test.js`

Kör igenom testerna en gång:
`yarn test:serve` eller `npm run test:serve`

# Övningsuppgifter

Skriv testerna i `__tests__`

## Uppgift 1: Testa knappen
  * Ska bli disabled efter att ha blivit klickad på
  * Ska ha fått annan style efter att ha blivit klickad på

## Uppgift 2: Testa API:et
  * `loadRates()` ska returnera json när anropad med korrekt url
  * `mapObjectToArray()` ska konvertera object till array
  * `mapObjectToArray()` ska faila när den anropas med något som inte är ett object

## Uppgift 3: Testa Appen
  * Ska innehålla en knapp
  * Ska lista korrekt antal items när `rates` har innehåll
  * `search` i statet skall uppdateras på att innehållet i inputfältet ändras
  * Listan skall filtreras när värdet på `search` ändras
  