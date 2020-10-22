import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d6a2e8",
      dark: "#8e44ad",
    },
    secondary: {
      main: "#cad3c8",
    },
    text: {
      light: "#34495e",
      main: "#2c3a47",
      dark: "#333333",
    },
    bcg: {
      light: "#fff",
      main: "#f1f2f6",
      dark: "#fafafa",
    },
    error: {
      main: "#B33771",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default theme;
