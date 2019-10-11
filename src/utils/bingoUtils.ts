
export const getRandomSubSetOfArray = (originalArray: Array<string>, count: number): Array<string> => {
  const getRandomStringAndRemove = (): string => {
    const randomIndex = Math.floor(Math.random() * originalArray.length) + 1;

    console.log(`originalArray.length: ${originalArray.length}    randomIndex: ${randomIndex}`);

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
