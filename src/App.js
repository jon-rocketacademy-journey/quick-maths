import { Stack } from "@mui/material";
import { useState } from "react";
import { MyAppBar } from "./Components/MyAppBar";
import Quiz from "./Components/Quiz";
import { questionTypes } from "./QuickMath/Base";
// import useWindowDimensions from "./Hooks/useWindowDimensions";

function App() {
  // const { height, width } = useWindowDimensions();
  const [selectedQuestionTypes, setSelectedQuestionTypes] = useState([
    questionTypes[0],
  ]);
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <MyAppBar {...{ selectedQuestionTypes, setSelectedQuestionTypes }} />
      <Quiz sx={{ flexGrow: 1 }} {...{ selectedQuestionTypes }} />
    </Stack>
  );
}

export default App;
