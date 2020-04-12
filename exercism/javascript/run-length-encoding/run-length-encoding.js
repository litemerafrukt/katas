const groupByEqual = (list) => {
  const findNextUnEqualIndex = (currentIndex) => {
    let nextIndex = currentIndex + 1;
    while (
      nextIndex < list.length
      && list[nextIndex - 1] === list[nextIndex]
    ) {
      nextIndex += 1;
    }
    return nextIndex;
  };

  const res = [];
  let index = 0;
  while (index < list.length) {
    const nextUnEqualIndex = findNextUnEqualIndex(index);
    res.push(list.slice(index, nextUnEqualIndex));
    index = nextUnEqualIndex;
  }

  return res;
};

export const encode = str => groupByEqual(str).reduce((acc, eqStr) => {
  const count = eqStr.length > 1 ? `${eqStr.length}` : '';
  const letter = eqStr[0];

  return `${acc}${count}${letter}`;
}, '');

export const decode = encoded => (
  encoded.replace(
    /([0-9]+)(.)/gi,
    (_match, count, letter) => letter.repeat(count),
  )
);
