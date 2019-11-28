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
