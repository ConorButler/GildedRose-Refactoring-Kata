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
  specialItems = [
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
      if (this.specialItems.includes(item.name)) {
        this.updateSpecialItem(item);
      } else {
        this.updateNormalItem(item);
      }
      item.sellIn--;
    });
    return this.items;
  }

  updateNormalItem(item: Item) {
    if (item.quality == 0) {
      return;
    }
    item.sellIn <= 0 ? (item.quality -= 2) : (item.quality -= 1);
    // don't use -- for clarity
  }

  updateSpecialItem(item: Item) {
    if (item.quality >= 50) {
      return;
    }
    if (item.name == "Aged Brie") {
      item.quality += 2;
    } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      this.updateBackStagePass(item);
    }
  }

  updateBackStagePass(item: Item) {
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
