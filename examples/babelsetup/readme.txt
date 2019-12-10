Börja med att installera babels core, och babels command line interface:

npm install --save-dev @babel/core @babel/cli


Skapa en mapp, src, som vi kan ha vår källkod i, och skapa en main.js

const fn = () => 1;



Just nu har vi ingen script runner, så vi måste köra Babels CLI från där filen ligger i node_modules

./node_modules/.bin/babel src --out-dir lib

Just nu görs ingen meningsfull transformering. Vi måste berätta för Babel HUR koden skall transformeras med plugins och presets. Vi testar att använda ett plugin:


npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions


En kombination av plugins kallas för presets, och en vanlig preset är env: "@babel/preset-env takes any target environments you've specified and checks them against its mappings to compile a list of plugins and passes it to Babel."

npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env


Vi kan lägga till lite mer exempelkod och se hur den transformeras:

const person = {
  name: 'John Smith',
  title: 'Developer'
}

const address = {
  street: '123 Fakestreet',
  city: 'Nowhere'
}

const contactInfo = {
  ...person,
  ...address
}


För att göra det enklare kan vi använda konfigurationsfiler för att berätta för Babel vilka presets vi vill använda. Vi kan skapa en .babelrc-fil:

{
  "presets": ["@babel/env"]
}

./node_modules/.bin/babel src --out-dir lib


Vi kan också specificera vilka "targets" vi skall nå med vår transformering. Dessa targets bygger på ett open source-projekt som heter browserlist. Vi kan antingen specificera browsers så här:


    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        }
      }
    ]

Men vanligast är att använda något i stil med:

  "presets": [
    [
      "@babel/env",
      {
        "targets": ["last 2 versions", "not dead" ,"> 0.2%"]
      }
    ]
  ]



Vi kan också flytta en del av den här informationen till package.json istället:

  "babel": {
    "presets": ["@babel/env"]
  },
  "browserslist": [
    "last 2 versions",
    "not dead"
    ,"> 0.2%"
  ]




