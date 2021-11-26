import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  describe("Normal items", () => {
    let item = new Item("foo", 1, 5);
    let gildedRose = new GildedRose([item]);

    it("normal items decrease in quality by 1 each update", () => {
      gildedRose.updateQuality();
      expect(item.quality).toBe(4);
    });

    it("once the sell by date has passed, quality degrades twice as fast", () => {
      gildedRose.updateQuality();
      expect(item.quality).toBe(2);
    });

    it("the quality of an item is never negative", () => {
      gildedRose.updateQuality();
      gildedRose.updateQuality();

      expect(item.quality).toBe(0);
    });
  });

  describe("Special items", () => {
    let Sulfuras = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    let agedBrie = new Item("Aged Brie", 0, 36);
    let backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      11,
      20
    );

    let gildedRose = new GildedRose([Sulfuras, agedBrie, backstagePass]);

    it("Aged Brie increases in quality the older it gets", () => {
      gildedRose.updateQuality();
      expect(agedBrie.quality).toBe(38);
    });

    it("Backstage passes' increase in quality as SellIn approaches", () => {
      expect(backstagePass.quality).toBe(21);
    });

    it("Backstage passes' quality increase by 2 when there are 10 days left", () => {
      gildedRose.updateQuality();
      expect(backstagePass.quality).toBe(23);
    });

    it("Backstage passes' quality increase by 3 when there are 5 days or less left", () => {
      gildedRose.updateQuality(); // quality: 25
      gildedRose.updateQuality(); // 27
      gildedRose.updateQuality(); // 29
      gildedRose.updateQuality(); // 31
      gildedRose.updateQuality(); // 5 days left
      expect(backstagePass.quality).toBe(34);
    });

    it("Backstage passes' quality drops to 0 after sellIn reaches 0", () => {
      gildedRose.updateQuality(); // sellIn: 4
      gildedRose.updateQuality(); // 3
      gildedRose.updateQuality(); // 2
      gildedRose.updateQuality(); // 1
      gildedRose.updateQuality();
      expect(backstagePass.quality).toBe(0);
    });

    it("the quality of an item doesn't increase above 50", () => {
      expect(agedBrie.quality).toBe(50);
    });

    it("Sulfuras quality is 80 and never changes", () => {
      expect(Sulfuras.quality).toBe(80);
    });
  });

  // new feature
  describe("Conjured items", () => {
    test.todo(
      "Conjured items degrade in quality twice as fast as normal items"
    );
  });
});
