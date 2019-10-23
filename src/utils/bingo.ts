import { memoize } from "./memoize";
import emojis from 'static/emojis.json'

const randomIntFromInterval = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomSubSetOfArray = (originalArray: Array<string>, count: number): Array<string> => {
  const getRandomStringAndRemove = (): string => {
    const randomIndex = randomIntFromInterval(1, originalArray.length);
    const randomString = originalArray.splice(randomIndex - 1, 1);

    if (randomString[0] === "") {
      console.log('no string!');
    }

    return randomString[0];
  };

  const subSet = new Array<string>();

  for (let i = 0; i < count; i++) {
    if (i === Math.floor(count / 2)) {
      subSet.push('emoji')
    }

    const randomString = getRandomStringAndRemove();
    subSet.push(randomString)
  }

  return subSet;
};

export const getRandomPhrases = memoize(getRandomSubSetOfArray);

export const getRandomSelectionOfEmojis = () => {
  const array = new Array<string>();

  const randomAmount = randomIntFromInterval(4, 8);
  const randomCheeseIndex = randomIntFromInterval(0, randomAmount - 1);
  while (array.length < randomAmount) {
    if (array.indexOf("🧀") === -1 && array.length === randomCheeseIndex) {
      array.push("🧀");
    }
    else {
      const randomIndex = randomIntFromInterval(1, emojis.length);
      const emoji = emojis[randomIndex];

      if (array.indexOf(emoji) === -1) {
        array.push(emoji);
      }
    }
  }

  return array;
}
