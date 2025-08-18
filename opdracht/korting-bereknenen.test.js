const KortingBerekening = require("./korting-berekenen");

describe("KortingBerekening", () => {
  let kortingBerekening = new KortingBerekening();;

  describe("berekenKorting", () => {
    test("geeft 0 korting als bedrag <= 50", () => {
      expect(kortingBerekening.berekenKorting(0)).toBe(0);
      expect(kortingBerekening.berekenKorting(50)).toBe(0);
    });

    test("geeft 5% korting als bedrag > 50 en <= 100", () => {
      expect(kortingBerekening.berekenKorting(51)).toBe(0.05);
      expect(kortingBerekening.berekenKorting(100)).toBe(0.05);
    });

    test("geeft 10% korting als bedrag > 100", () => {
      expect(kortingBerekening.berekenKorting(101)).toBe(0.10);
      expect(kortingBerekening.berekenKorting(200)).toBe(0.10);
    });
  });

  describe("berekenEindbedrag", () => {
    test("geen korting bij bedrag <= 50", () => {
      expect(kortingBerekening.berekenEindbedrag(50)).toBe(50);
    });

    test("5% korting bij bedrag tussen 51 en 100", () => {
      const eindbedrag = kortingBerekening.berekenEindbedrag(80);
      expect(eindbedrag).toBe(76); // 80 * 0.95
    });

    test("10% korting bij bedrag > 100", () => {
      const eindbedrag = kortingBerekening.berekenEindbedrag(200);
      expect(eindbedrag).toBe(180); // 200 * 0.9
    });
  });
});
