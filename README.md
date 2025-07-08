# Testen met Jest en jest-html-reporter

In dit project gebruiken we [Jest](https://jestjs.io/) als testframework en [jest-html-reporter](https://github.com/Hargne/jest-html-reporter) om testresultaten overzichtelijk in HTML te tonen.

## 📦 Installatie

1. Initialiseer je project (indien nog niet gebeurd):

   ```bash
   npm init -y
   ```

2. Installeer Jest:

   ```bash
   npm install --save-dev jest
   ```

3. Installeer jest-html-reporter:

   ```bash
   npm install --save-dev jest-html-reporter
   ```

## ▶️ Runnen van tests

Voer je tests uit met:

```bash
npm test
```

Na het uitvoeren van de tests wordt automatisch een bestand `test-report.html` aangemaakt in de hoofdmap van het project. Dit kun je openen in je browser om de testresultaten te bekijken.