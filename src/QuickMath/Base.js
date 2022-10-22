const { v4: uuidv4 } = require("uuid");

const createQuestion = (text, answer, type = null) => {
  return { id: uuidv4(), q: text, a: answer, type: type };
};

export const getAdditionQuestion = (difficulty = 10) => {
  const a = randInt(0, difficulty);
  const b = randInt(0, difficulty);
  return createQuestion(`${a} + ${b}`, a + b, "+");
};

export const getSubtractionQuestion = (difficulty = 10) => {
  const a = randInt(0, Math.round(difficulty / 2));
  const x = randInt(0, Math.round(difficulty / 2));
  return createQuestion(`${a + x} - ${a}`, x, "-");
};

export const getMultiplicationQuestion = (difficulty = 10) => {
  const a = randInt(0, Math.round(difficulty));
  const b = randInt(0, Math.round(difficulty));
  return createQuestion(`${a} × ${b}`, a * b, "×");
};

export const getDivisionQuestion = (difficulty = 10) => {
  const a = randInt(1, Math.round(Math.sqrt(difficulty)));
  const x = randInt(0, Math.round(Math.sqrt(difficulty)));
  return createQuestion(`${a * x} ÷ ${a}`, x, "÷");
};

export const getQuestion = (selectedQuestionTypes) => {
  const idx = Math.floor(Math.random() * selectedQuestionTypes.length);
  const selectedQuestionType = selectedQuestionTypes[idx];
  switch (selectedQuestionType) {
    case "+":
      return getAdditionQuestion();
    case "-":
      return getSubtractionQuestion();
    case "×":
      return getMultiplicationQuestion();
    case "÷":
      return getDivisionQuestion();
    default:
      return null;
  }
};

const randInt = (lower, upper) =>
  Math.floor(Math.random() * (upper - lower)) + lower;

export const questionTypes = ["+", "-", "×", "÷"];
