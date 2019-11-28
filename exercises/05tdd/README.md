# Övning: Behavior Driven Development / Test Driven Development

## Introduktion

### Given When Then
Ett sätt att strukturera sina test samt upptäcka testscenarion är att jobba enligt **Test Driven Development**/**Behavior Driven Development**. Båda utgår från att man skriver testen först, sedan implementerar man testerna. [**Given When Then**](https://martinfowler.com/bliki/GivenWhenThen.html) är en ytterligare struktur som man kan använda sig av för att skriva tester så att de blir läsliga för icke-teckniska personer. Det kan hjälpa en att se bortom koden och ens implementation och fokusera på att rätt saker testas. Ett typisk upplägg för ett test kan vara:

```yaml
Feature: Serve coffee
  Coffee should not be served until paid for
  Coffee should not be served until the button has been pressed
  If there is no coffee left then money should be refunded

Scenario: Buy last coffee
  Given there are 1 coffees left in the machine
  And I have deposited 1$
  When I press the coffee button
  Then I should be served a coffee
```

I det här scenarion spelar det ingen roll vilket språk/ramverk/bibliotek som används för att faktiskt skriva koden för att servera kaffe eller hur kaffeserveringen ska beräknas, enbart den `Feature` som ska implementeras samt ett eller flera `Scenario` som kan uppstå när denna `Feature` används.

## Övning - Implementera `PizzaCalculator`

`PizzaCalculator` är en applikation för att beräkna hur många pizzor och hur mycket dricka man måste köpa baserat på hur många personer som ska äta pizza.

Exempelscenario:

  * Är vi 6 personer måste vi köpa in två pizzor
  * Är vi 6 personer måste vi köpa 1 2l dricka + en 1l dricka.
  * Är vi 6 personer så blir den totala summan ca 300kr

Hur dessa beräkningar görs är dock upp till er. Sätt upp några grundvariabler som t.ex. _hur många personer kan dela på en pizza_, _hur mycket en standardpizza kostar_ samt _hur många personer som kan dela på en 2l dricka_.

**Ni behöver inte skapa något UI/GUI, applikationen ska göras helt i ren JavaScript och printa saker med `console.log`. Ingen DOM behöver vara inblandad.**

1. Beskriv applikationens egenskaper (`Features`) enligt _Given When Then_-strukturen.
2. Sätt upp ett visst antal scenarion som ska inträffa enligt _Given When Then_-strukturen ovan. Ta utgångspunkt från mitt exempel med _6 personer_. Använd dock flera scenarion: _Om vi är 2 personer_, _Om vi är 20 personer_.
3. Sätt upp ett projekt på GitLab och koppla `PizzaCalculator` dit. Varje gång ni har beskrivit ett scenario, och har skrivit både tester och kod för scenariot, pusha upp allt för att se om det verifieras. 
