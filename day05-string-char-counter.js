const str = 'XeroX';

function getTheGapX(str) {
  const firstIndex = str.indexOf('X');
  const lastIndex = str.lastIndexOf('X');
  if (firstIndex === -1) return -1;

  const gapBetweenX = lastIndex - firstIndex;
  return gapBetweenX;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
