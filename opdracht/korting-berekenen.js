class KortingBerekening {
  KORTING_HOOG_BEDRAG = 0.10;
  KORTING_GEMIDDELD_BEDRAG = 0.05;
  BEDRAG_HOOG = 100;
  BEDRAG_GEMIDDELD = 50;
  
  berekenKorting(bestelbedrag) {
    if (bestelbedrag > this.BEDRAG_HOOG) {
      return this.KORTING_HOOG_BEDRAG;
    }
    
    if (bestelbedrag > this.BEDRAG_GEMIDDELD) {
      return this.KORTING_GEMIDDELD_BEDRAG;
    }
    
    return 0;
  }

  berekenEindbedrag(bestelbedrag) {
    const korting = this.berekenKorting(bestelbedrag);
    return bestelbedrag * (1 - korting);
  }
}

module.exports = KortingBerekening;