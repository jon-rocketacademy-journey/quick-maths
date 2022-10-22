import { useEffect } from "react";
import { TextField, useTheme } from "@mui/material";
import useKeyDown from "../Hooks/useKeyDown";
import {
  STATE_CORRECT,
  STATE_INDETERMINATE,
  STATE_WRONG,
} from "../Config/Constants";
// import useMouseMove from "../Hooks/useMouseMove";

const preventDefault = (e) => e.preventDefault();

export const InputField = (props) => {
  const { value, setValue, questionState, setQuestionState, timer } = props;
  const [key, setKey] = useKeyDown();
  // const [x, y] = useMouseMove();
  const theme = useTheme();

  useEffect(() => {
    if (key === "") return;
    setKey("");
    setQuestionState(STATE_INDETERMINATE);
    clearTimeout(timer);
    const text = questionState === 1 ? "" : value;
    if (key === "Backspace") {
      setValue(text.slice(0, text.length - 1));
    } else if (key === "Delete") {
      setValue("");
    } else if (key === "Enter") {
      setQuestionState(STATE_WRONG);
    } else if (key === "-") {
      setValue(text[0] === "-" ? text.slice(1, text.length) : "-" + text);
    }
    if (!/\d|\./.test(key)) return;

    setValue(text + key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, setKey]);

  return (
    <TextField
      hiddenLabel
      autoComplete="off"
      variant="outlined"
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      // disabled={true}
      autoFocus={true}
      color={
        questionState === STATE_CORRECT
          ? "success"
          : questionState === STATE_WRONG
          ? "error"
          : "primary"
      }
      value={value}
      onChange={preventDefault}
      onCopy={preventDefault}
      onDrag={preventDefault}
      onDrop={preventDefault}
      onPaste={preventDefault}
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "90vw",
        "& .MuiInputBase-root": {
          "& > fieldset": {
            borderColor:
              questionState === STATE_CORRECT
                ? theme.palette.success.main
                : questionState === STATE_WRONG
                ? theme.palette.error.main
                : undefined,
            borderWidth: "2px",
            borderStyle: "solid",
          },
        },
        "& input": {
          textAlign: "center",
          height: "100%",
          padding: 0,
        },
        ...props.sx,
      }}
      InputProps={{
        style: {
          height: "100%",
        },
      }}
    />
  );
};
