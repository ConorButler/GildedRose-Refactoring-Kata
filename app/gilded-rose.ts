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
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    const specialItems = [
      "Sulfuras, Hand of Ragnaros",
      "Aged Brie",
      "Backstage passes to a TAFKAL80ETC concert",
    ];

    this.items.forEach((item) => {
      if (specialItems.includes(item.name)) {
        // handle special items method
      } else {
        this.updateNormalItem(item);
      }
      item.sellIn--;
    });
    // for (let i = 0; i < this.items.length; i++) {
    //   if (
    //     this.items[i].name != "Aged Brie" &&
    //     this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
    //   ) {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
    //         this.items[i].quality--;
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality++;
    //       if (
    //         this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
    //       ) {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality++;
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality++;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
    //     this.items[i].sellIn--;
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != "Aged Brie") {
    //       if (
    //         this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
    //       ) {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
    //             this.items[i].quality--;
    //           }
    //         }
    //       } else {
    //         this.items[i].quality =
    //           this.items[i].quality - this.items[i].quality;
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality++;
    //       }
    //     }
    //   }
    // }

    return this.items;
  }

  updateNormalItem(item: Item) {
    if (item.quality == 0) {
      return;
    }
    item.sellIn <= 0 ? (item.quality -= 2) : (item.quality -= 1);
  }
}
