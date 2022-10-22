import {
  AppBar,
  Avatar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useMyThemeContext } from "..";
import PropTypes from "prop-types";
import { QuestionTypePicker } from "./QuestionTypePicker";
import { MaterialUISwitch } from "./MaterialUISwitch";
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export function MyAppBar(props) {
  const { isDarkMode, setIsDarkMode } = useMyThemeContext();
  return (
    <HideOnScroll {...props}>
      <AppBar position="fixed">
        <Toolbar>
          <Avatar alt="Quick Maths" src="/logo128.png" sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            sx={{ fontSize: 30, display: { xs: "none", sm: "block" }, mr: 2 }}
          >
            Quick Maths
          </Typography>
          <QuestionTypePicker {...props} />
          <MaterialUISwitch
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "light-dark mode" }}
            onChange={() => setIsDarkMode(!isDarkMode)}
            check={isDarkMode.toString()}
          />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
