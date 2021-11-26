export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  static specialItems = [
    "Sulfuras, Hand of Ragnaros",
    "Aged Brie",
    "Backstage passes to a TAFKAL80ETC concert",
  ];

  items: Array<Item>;
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (GildedRose.specialItems.includes(item.name)) {
        this.updateSpecialItem(item);
      } else if (item.name.startsWith("Conjured")) {
        this.updateConjuredItem(item);
      } else {
        this.updateNormalItem(item);
      }

      item.sellIn--;
    });
    return this.items;
  }

  private updateNormalItem(item: Item) {
    if (item.quality != 0) {
      item.sellIn <= 0 ? (item.quality -= 2) : (item.quality -= 1);
    }
  }

  private updateConjuredItem(item: Item) {
    if (item.quality != 0) {
      item.sellIn <= 0 ? (item.quality -= 4) : (item.quality -= 2);
    }
  }

  private updateSpecialItem(item: Item) {
    if (item.quality >= 50) {
      return;
    }
    if (item.name == "Aged Brie") {
      this.updateAgedBrie(item);
    } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      this.updateBackStagePass(item);
    }
  }

  private updateAgedBrie(item: Item) {
    item.quality += 2;
  }

  private updateBackStagePass(item: Item) {
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      item.quality += 3;
    } else if (item.sellIn <= 10) {
      item.quality += 2;
    } else {
      item.quality += 1; // don't use ++ for clarity
    }
  }
}
