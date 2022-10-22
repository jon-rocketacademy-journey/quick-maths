import { useEffect, useState, useRef } from "react";
import { Stack } from "@mui/material";
import { getQuestion } from "../QuickMath/Base";
import ItemList from "./ItemList";
import { InputField } from "./InputField";
import {
  NUM_QUESTIONS,
  STATE_CORRECT,
  STATE_INDETERMINATE,
} from "../Config/Constants";

export default function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [value, setValue] = useState("");
  const [questionState, setQuestionState] = useState(STATE_INDETERMINATE);
  const timer = useRef(null);
  const { sx, selectedQuestionTypes } = props;

  useEffect(() => {
    if (
      questionState !== STATE_CORRECT &&
      questions[0]?.a?.toString() === value
    ) {
      setQuestionState(STATE_CORRECT);
      setQuestions([
        ...questions.slice(1, questions.length),
        getQuestion(selectedQuestionTypes),
      ]);
      timer.current = setTimeout(() => {
        setValue("");
        setQuestionState(STATE_INDETERMINATE);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, questionState]);

  useEffect(() => {
    const new_questions = questions.filter((qns) =>
      selectedQuestionTypes.includes(qns.type)
    );
    if (selectedQuestionTypes.length > 0) {
      setQuestions([
        ...new_questions,
        ...[...Array(Math.max(NUM_QUESTIONS - new_questions.length, 0))].map(
          () => getQuestion(selectedQuestionTypes)
        ),
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedQuestionTypes]);

  return (
    <Stack
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      component=""
      sx={{ width: "100%", ...sx }}
    >
      <ItemList
        questions={questions}
        questionState={questionState}
        sx={{ pt: 10 }}
      />
      <InputField
        {...{ value, setValue, questionState, setQuestionState }}
        timer={timer.current}
        sx={{ flexGrow: 1, pb: 2 }}
      />
    </Stack>
  );
}
