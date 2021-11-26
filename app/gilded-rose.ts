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
  static specialItems = {
    // add new special items here
    "Sulfuras, Hand of Ragnaros": { normalMultiplier: 0, expiredMultiplier: 0 },
    "Aged Brie": { normalMultiplier: 1, expiredMultiplier: 1 },
    "Backstage passes to a TAFKAL80ETC concert": {
      updateQualityFunction: "updateBackStagePass",
    },
  };
  static normalDecayRate = 1;
  static expiredDecayRate = 2;

  items: Array<Item>;
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.quality >= 50) {
      } else if (Object.keys(GildedRose.specialItems).includes(item.name)) {
        this.updateSpecialItem(item);
      } else {
        this.updateNormalItem(item);
      }
      if (item.quality <= 0) {
        item.quality = 0;
      }
      item.sellIn--;
    });
    return this.items;
  }

  private updateItemQuality(
    item: Item,
    normalMultiplier: number,
    expiredMultiplier = normalMultiplier
    // supports a custom rate for when item is expired
  ) {
    item.sellIn <= 0
      ? (item.quality += GildedRose.expiredDecayRate * expiredMultiplier)
      : (item.quality += GildedRose.normalDecayRate * normalMultiplier);
  }

  private updateNormalItem(item: Item) {
    item.name.startsWith("Conjured")
      ? this.updateItemQuality(item, -2)
      : this.updateItemQuality(item, -1);
  }

  private updateSpecialItem(item: Item) {
    let specialItemRules = GildedRose.specialItems[item.name];
    if (specialItemRules.updateQualityFunction) {
      this[specialItemRules.updateQualityFunction](item);
    } else {
      this.updateItemQuality(
        item,
        specialItemRules.normalMultiplier,
        specialItemRules.expiredMultiplier
      );
    }
  }

  private updateBackStagePass(item: Item) {
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      this.updateItemQuality(item, 3);
    } else if (item.sellIn <= 10) {
      this.updateItemQuality(item, 2);
    } else {
      this.updateItemQuality(item, 1);
    }
  }
}
