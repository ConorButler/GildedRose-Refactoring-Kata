# Gilded Rose

This is the [Gilded Rose](https://github.com/emilybache/GildedRose-Refactoring-Kata) kata in TypeScript.

![Tests](https://i.gyazo.com/c6455ab37d7fd82e4b1204e16c47471a.png)

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

### Jest way

```sh
npm test
```

To run all tests in watch mode

```sh
npm test:watch
```

# My Approach

I found the requirements to not edit the Item class quite a hinderance to writing the cleanest code possible. I'm not particularly proud of my implementation where I have a bunch of methods to handle each type of item. I would have preferred if the Item object could have a type attribute (maybe multiple types) for which you could write a method for each type and then items with multiple types could have compounding effects. For example, "Aged Brie" and "Backstage passes" both could share an qualityIncreasesWithAge type, but "Backstage Passes" have specific requirements for the last 10 days so could have another backstagePass type attribute. This would make it a lot easier to add new items.

Regardless, I don't think a new class was required as the concern of the updateQuality method is just modifying the existing state of items. I thought about a checkItem module that determines what type the item is by seeing if it matched or contained certain words that had special rules - sort of a roundabout what of what I described above but without modifying the Item class. I decided against this because I thought the logic would be too messy, but perhaps it will be needed if you were to add more items with unique rules, as at the moment that would require you to add another else if to one of the methods.
