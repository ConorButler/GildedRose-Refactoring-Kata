# Gilded Rose

This is the [Gilded Rose](https://github.com/emilybache/GildedRose-Refactoring-Kata) kata in TypeScript.

![Tests](https://i.gyazo.com/cb77801cb714413223c2428b5ac7bd6e.png)

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

I found the requirements to not edit the Item class quite a hinderance to writing the cleanest code possible. Regarding the changes I made to updateQuality, I don't think a new class was required as the concern of the updateQuality method is just modifying the existing state of items inside a given Gilded Rose. I separated special items from normal items by having them be a class variable. This way you can easily add new special items and give them a multiplier for how quickly the quality increases or decreases (it defaults to increasing because this is more readabe; e.g. a multipler of -2 decreases the quality by 2 each update). You can also name a function to handle more complex rules like with "Backstage Passes", but you must also create this function inside the Gilded Rose class.

I was going to separate "Conjured" items and make it a "modifier", so any item that starts with a modifier will have special rules defined, but the logic of this was become very complicated and I tried to refocus on the requirements. It would have been similar to the implementation of specialItems; just another hash of objects but this time storing the modifier string and the rules, however this would have required looping over every modifier for each item in the Gilded Rose and checking if it .startsWith() this string, and then extracting the rules and applying them.

Also with the tests, there are a lot of edge cases open because again the Item class can't be modified, so you could instanstiate items with negative value or sellIn. I have tried to account for that but it would be a lot easier and better separation of concerns if these limitations were just on the Item class to begin with. Overall I would have preffered if the Item object could have a type attribute (maybe multiple types) for which you could write a method for each type and then items with multiple types could have compounding effects. For example, "Aged Brie" and "Backstage passes" both could share an qualityIncreasesWithAge type, but "Backstage Passes" have specific requirements for the last 10 days so could have another backstagePass type attribute. This would make it a lot easier to add new items, but of course these ideas were inhibted by the requirements.
