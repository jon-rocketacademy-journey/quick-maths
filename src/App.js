import { Box } from "@mui/material";
import { MyAppBar } from "./Components/MyAppBar";

function App() {
  return (
    <Box>
      <MyAppBar />
      <Box>
        <div style={{ height: "100%" }}></div>
      </Box>
    </Box>
  );
}

export default App;
