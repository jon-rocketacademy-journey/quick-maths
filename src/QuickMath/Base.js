export const getAdditionQuestion = () => {
  const a = randInt(0, 10);
  const b = randInt(0, 10);
  return { q: `${a} + ${b}`, a: a + b };
};

const randInt = (lower, upper) =>
  Math.floor(Math.random() * (upper - lower)) + lower;
