module.exports = function multiply(first, second) {
  const firstArr = first.length >= second.length ? first.split('') : second.split('');
  const secondArr = first.length >= second.length ? second.split('') : first.split('');
  let i;
  let mind;
  let currVal;
  let parts = [];
  let resultArr = [];

  for (i = 0; i < secondArr.length; i++) {
    let j;
    parts[i] = [];
    mind = 0;
    currVal = secondArr[secondArr.length - i - 1];

    for (j = 0; j < firstArr.length; j++) {
      parts[i][j] = (+firstArr[firstArr.length - j - 1] * +currVal + mind) % 10;
      mind = Math.floor((+firstArr[firstArr.length - j - 1] * +currVal + mind) / 10);
    }

    if (mind > 0) {
      parts[i].push(mind);
    }

    for (let k = 0; k < i; k++) {
      parts[i].unshift(0);
    }
  }

  mind = 0;

  for (let j = 0; j < parts[i - 1].length; j++) {
    resultArr[j] = 0;
    let temp = 0;

    for (let k = 0; k < parts.length; k++) {
      if (parts[k][j]) {
        temp += parts[k][j];
      }
    }

    resultArr[j] += (temp + mind) % 10;

    mind = Math.floor((temp + mind) / 10);
  }
  
  if (mind > 0) {
    resultArr[resultArr.length].push(mind);
  }


  return resultArr.reverse().join('');
}
