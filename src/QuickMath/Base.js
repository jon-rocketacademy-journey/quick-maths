export const getAdditionQuestion = (difficulty = 10) => {
  const a = randInt(0, difficulty);
  const b = randInt(0, difficulty);
  return { q: `${a} + ${b}`, a: a + b };
};

export const getSubtractionQuestion = (difficulty = 10) => {
  const a = randInt(0, Math.round(difficulty / 2));
  const x = randInt(0, Math.round(difficulty / 2));
  return { q: `${a + x} - ${x}`, a: x };
};

export const getMultiplicationQuestion = (difficulty = 10) => {
  const a = randInt(0, Math.round(difficulty));
  const b = randInt(0, Math.round(difficulty));
  return { q: `${a} × ${b}`, a: a * b };
};

export const getDivisionQuestion = (difficulty = 10) => {
  const a = randInt(1, Math.round(Math.sqrt(difficulty)));
  const x = randInt(0, Math.round(Math.sqrt(difficulty)));
  return { q: `${a * x} ÷ ${a}`, a: x };
};

export const getQuestion = (n = 4) => {
  const questionType = Math.floor(Math.random() * n);
  switch (questionType) {
    case 0:
      return getAdditionQuestion();
    case 1:
      return getSubtractionQuestion();
    case 2:
      return getMultiplicationQuestion();
    case 3:
      return getDivisionQuestion();
    default:
      return null;
  }
};

const randInt = (lower, upper) =>
  Math.floor(Math.random() * (upper - lower)) + lower;
