import { Autocomplete, Checkbox, TextField, Chip } from "@mui/material";
import { useMyThemeContext } from "..";
import { questionTypes } from "../QuickMath/Base";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { createTheme, ThemeProvider } from "@mui/material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export function QuestionTypePicker(props) {
  const { isDarkMode, theme } = useMyThemeContext();
  const innerTheme = createTheme({
    ...theme,
    typography: {
      fontSize: 18,
    },
  });
  const { selectedQuestionTypes, setSelectedQuestionTypes } = props;
  return (
    <ThemeProvider theme={innerTheme}>
      <Autocomplete
        value={selectedQuestionTypes}
        onChange={(_, newValue) => {
          setSelectedQuestionTypes(newValue);
        }}
        multiple
        options={questionTypes}
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        renderInput={(params) => <TextField {...params} variant="filled" />}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option}
              size="small"
              {...getTagProps({ index })}
            />
          ))
        }
        sx={{
          backgroundColor: isDarkMode ? undefined : "white",
          flexGrow: 1,
          display: "flex",
          "& .MuiInputBase-root": { fontSize: "1rem", paddingTop: 0 },
          "& .MuiIconButton-root": { height: 20 },
          mr: 2,
        }}
      />
    </ThemeProvider>
  );
}
