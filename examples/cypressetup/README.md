# End to End testing med Cypress

>Utgå från login-projektet

## Installera Cypress

Lägg till Cypress i projektet: `npm install --save-dev cypress`

Lägg till ett Cypress-kommando i package.json-scripten: 
```
"cypress:open": "cypress open"
```

Kör Cypress första gången för att initialisera Cypress och se Cypress köra igenom alla exempel-testerna:
`npm run cypress:open`

Cypress kommer nu att lägga till en `cypress`-mapp och en `cypress.json` i din projekt-rot

Sedan kommer Cypress grafiska klient att köras

Lägg till en `baseUrl` i din `cypress.json`, som är den url Cypress kommer att utgå ifrån i sina tester:
```
{
  "baseUrl": "http://localhost:3000"
}

``` 

Vi vill kunna köra vårt projekt och Cypress samtidigt, så vi installerar ett paket som hjälper oss att göra detta: `npm install --save-dev start-server-and-test`

Vi lägger sedan till ett nytt script-kommando i package.json
```
"cypress:e2e": "start-server-and-test start http://localhost:3000 cypress:open"
```

Stäng ned Cypress-klienten

## Skriv ett Cypress-test

Test i Cypress läggs i `cypress/integration`-mappen, skapa en ny fil där som heter `login.spec.js`

```
describe('Login Test', function() {
  it('Visits my local host', function() {
    cy.visit('/');
  });
});
```

Starta Cypress-klienten igen med det nya script-kommandot: `npm run cypress:e2e`

Leta upp `login.spec.js` i listan över test och klicka på den för att köra testet

Cypress kommer nu starta Chrome och sedan gå till localhost:3000 samt visa resultatet av testet

## Ett End to End-test med Cypress

Skriv om login.spec.js:

```
before(function() {
  cy.clearLocalStorage();
});

describe('Login Test', function() {
  it('Visits my local host and logs in', function() {
    cy.visit('/');

    cy.get('input[name="email"]')
      .type('user.name@domain.com')
      .should('have.value', 'user.name@domain.com');

    cy.get('input[name="password"]')
      .type('MyPass99')
      .should('have.value', 'MyPass99');

    cy.get('input[type="submit"]')
      .click();

    cy.get('.user')
      .should('contain', 'user.name@domain.com');
  });
});

```

## Lägg till Cypress till GitLab CI/CD

För att köra Cypress headless med Electron, så behöver vi lägga till några kommandon i package.json:
```
"cypress:run": "cypress run",
"cypress:e2e:ci": "start-server-and-test start http://localhost:3000 cypress:run"
```

Nu behöver vi uppdatera `.gitlab-ci.yml`-filen så att den kör Cypress-testerna som en del av test-steget:

```
image: node:10.16.0

variables:
  CYPRESS_CACHE_FOLDER: "$CI_PROJECT_DIR/cache/Cypress"

cache:
  paths:
    - node_modules/
    - cache/Cypress

test:
  image: cypress/base:10
  stage: test
  before_script: 
    - npm install 
  script:
    - npm run cypress:e2e:ci

pages:
  stage: deploy
  before_script: 
    - npm install
  script:
    - npm run build
  artifacts:
    paths:
      - public
  only:
    - master

```

Om vi pushar in till GitLab-repot nu, så borde även Cypress-testerna köras, och sedan lanseras den nya inloggningsfunktionen 


