import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { Stack } from "@mui/material";
import { getAdditionQuestion } from "../QuickMath/Base";
import ItemList from "./ItemList";
import { InputField } from "./InputField";
import {
  NUM_QUESTIONS,
  STATE_CORRECT,
  STATE_INDETERMINATE,
} from "../Config/Constants";

export default function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [activeIdx, setActiveIdx] = useState(questions.length);
  const [value, setValue] = useState("");
  const [questionState, setQuestionState] = useState(STATE_INDETERMINATE);
  const timer = useRef(null);

  useLayoutEffect(() => {
    setQuestions(
      [
        ...questions,
        ...Array(Math.max(NUM_QUESTIONS - questions.length, 0)),
      ].map(getAdditionQuestion)
    );
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (
      questionState !== STATE_CORRECT &&
      questions[activeIdx]?.a.toString() === value
    ) {
      setQuestionState(1);
      setActiveIdx(activeIdx + 1);
      setQuestions([...questions, getAdditionQuestion()]);
      timer.current = setTimeout(() => {
        setValue("");
        setQuestionState(STATE_INDETERMINATE);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, questionState]);

  return (
    <Stack
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      component=""
      sx={{ width: "100%", ...props.sx }}
    >
      <ItemList
        questions={questions}
        activeIdx={activeIdx}
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
