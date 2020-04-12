function transform(scoreDict) {
  const newScoreDict = {};

  Object.entries(scoreDict).forEach(([score, letters]) => letters.forEach((letter) => {
    newScoreDict[letter.toLowerCase()] = Number(score);
  }));

  return newScoreDict;
}

export default transform;
