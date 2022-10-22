import { Stack } from "@mui/material";
import { MyAppBar } from "./Components/MyAppBar";
import Quiz from "./Components/Quiz";
// import useWindowDimensions from "./Hooks/useWindowDimensions";

function App() {
  // const { height, width } = useWindowDimensions();
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <MyAppBar />
      <Quiz sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default App;
