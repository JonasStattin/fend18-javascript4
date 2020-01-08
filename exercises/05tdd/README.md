# Övning: Behavior Driven Development / Test Driven Development

## Introduktion

`PizzaCalculator` är en applikation för att beräkna hur många pizzor och hur mycket dricka man måste köpa baserat på hur många personer som ska äta pizza.

Exempelscenario:

  * Är vi 6 personer måste vi köpa in två pizzor
  * Är vi 6 personer måste vi köpa 1 2l dricka + en 1l dricka.
  * Är vi 6 personer så blir den totala summan ca 300kr

Hur dessa beräkningar görs är dock upp till er. Sätt upp några grundvariabler som t.ex. _hur många personer kan dela på en pizza_, _hur mycket en standardpizza kostar_ samt _hur många personer som kan dela på en 2l dricka_.

## Övning - Implementera `PizzaCalculator`

**Ni behöver inte skapa något UI/GUI, applikationen ska göras helt i ren JavaScript och printa saker med `console.log`. Ingen DOM behöver vara inblandad.**

"Appen" börjar med en funktion som tar emot hur många personer som skall vara med och äta pizza. 

Den funktionen behöver sedan använda sig av andra stödfunktioner för att räkna ut hur många pizzor som måste köpas, hur mycket dryck som måste köpas, samt vad den totala summan kommer att bli. 

Börja med att först skriva tester för dessa funktioner, t.ex:

```
test('6 persons should need 2 pizzas', () => {
  const pizzaAmount = calcPizza(6);
  expect(pizzaAmount).toBe(2);
});
```

Efter att ni har skrivit testerna, skriv då funktionerna tills att de matchar testerna. 
