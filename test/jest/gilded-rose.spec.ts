import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("the quality of an item is never negative", () => {
    let item = new Item("foo", 1, 1);
    let gildedRose = new GildedRose([item]);

    gildedRose.updateQuality();
    gildedRose.updateQuality();

    expect(item.quality).toBe(0);
  });

  test.todo(
    "the quality of an item is never increased above 50 unless it is Sulfuras"
  );

  test.todo("once the sell by date has passed, quality degrades twice as fast");

  test.todo("Aged Brie increases in quality the older it gets");

  test.todo("the quality of an item is never more than 50");

  test.todo("Sulfuras never has to be sold or decreases in quality");

  test.todo("Sulfuras quality is 80 and never changes");

  test.todo(
    "Backstage passes' quality increase by 2 when there are 10 days left"
  );

  test.todo(
    "Backstage passes' quality increase by 3 when there are 5 days or less"
  );

  test.todo("Backstage passes' quality drops to 0 after SellIn reaches 0");

  test.todo("Conjured items degrade in quality twice as fast as normal items");
});
