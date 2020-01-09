## GitLab

Skaffa ett konto hos GitLab

Pricing -> Free -> Sign up
https://gitlab.com/users/sign_in

Skapa ett nytt projekt

---

## Klona ditt projekt från ditt GitLab repository

Klona projektet with valfri Git-klient

Kopiera filerna från `solutions/04coverage` (eller valfritt projekt med tester)

Skapa en `.gitlab-ci.yml` fil i projektroten, med följande innehåll:

```
image: node:10.16.0

test:
  stage: test
  before_script: 
    - npm install 
  script:
    - npm run test
```

Pusha nu hela projektet till GitLab-repot och kolla i CI/CD-panelen att testningen går igenom

---

## Testa Merge Request

Fixa några GitLab settings:

Settings -> General -> Merge request -> Only allow merge requests to be merged if the pipeline succeeds

Skapa en ny feature-branch

Gör en ändring som breakar ett test

Publicera branchen till GitLab

I GitLab, skapa en ny Merge Request utifrån den här branchen i Merge Request-panelen

Eftersom testet misslyckats skall det inte vara möjligt att göra en merge

Fixa problemet (rulla tillbaka ändringen, eller skriv om testet), och pusha upp till repot

Nu ska det vara möjligt att merga in din feature branch

---

## Lägg till en staging deploy

Vi lägger till ett nytt steg i `.gitlab-ci.yml`

```
image: node:10.16.0

test:
  stage: test
  before_script: 
    - npm install 
  script:
    - npm run test

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

Pusha till GitLab, när ditt bygge gått igenom tar det c:a 30 minuter innan det blir publicerat om det är första gången.

När sidorna väl är uppe kan du hitta länken till dem på:

Settings -> Pages

---

## Gör sidan tillgänglig

Nu kommer du att märka att du inte kan se din sida. Däremot får du en HTML-fil servad. Detta beror på två saker:

1. GitLab kommer serva dina filer från "public"-mappen, men i Create-React-App är det "build"-mappen som används för det byggda projektet.
2. Create-React-App utgår från att projektet körs från roten på servern, men på GitLab Pages ligger ditt projekt i en folder. 

För att lösa 1:

Vi tar bort public och flyttar över build till public istället i `.gitlab-ci.yml`

```
image: node:10.16.0

test:
  stage: test
  before_script: 
    - npm install 
  script:
    - npm run test

pages:
  stage: deploy
  before_script: 
    - npm install
  script:
    - npm run build
    - rm -rf public
    - mv build public
  artifacts:
    paths:
      - public
  only:
    - master
```

För att lösa 2:

Lägg till en "homepage"-property i din package.json:

```
"homepage": "/my-login-app",
```

Du bör även göra dina pages publikt tillgängliga, ändra detta i settings på GitLab:

Settings -> General -> Visibility, project features, permissions -> Pages
Ändra från Only Project Members till Everyone och spara

Pusha in dina ändringar, snart borde du kunna se din app publicerad!

