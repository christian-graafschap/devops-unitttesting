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

## ⚙️ Configuratie

Pas je `package.json` aan met het volgende:

### Scripts

Voeg onder `scripts` toe:

```json
"scripts": {
  "test": "jest"
}
```

### HTML Reporter

Voeg onderaan je `package.json` het volgende toe:

```json
"jest-html-reporter": {
  "pageTitle": "Test Report",
  "outputPath": "test-report.html"
}
```

## ▶️ Testen

Voer je tests uit met:

```bash
npm test
```

Na het uitvoeren van de tests wordt automatisch een bestand `test-report.html` aangemaakt in de hoofdmap van het project. Dit kun je openen in je browser om de testresultaten te bekijken.

## 📁 Output

- `test-report.html`: HTML-overzicht van de testresultaten.

> Zorg ervoor dat je je testbestanden de extensie `.test.js` geeft zodat Jest ze automatisch herkent.
