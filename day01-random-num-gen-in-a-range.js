function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  const randomNum = Math.floor(Math.random() * (rangeEnd - rangeStart)) + rangeStart;

  return randomNum;
}

console.log(`My random number: ${randomNumberGeneratorInRange(15, 100)}`)