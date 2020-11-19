import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  upload: {
    position: "fixed",
    width: "100vw",
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    background: theme.palette.bcg.light,
    padding: "2.5rem 0",
    zIndex: 1,
    boxShadow: "0 0 5px #000",
    height: "20vh",
    // marginTop: "2.5rem",

    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
    },
  },
  caption: {
    "& input": { fontSize: "2.5rem" },
    "& label": { fontSize: "2rem" },
    flex: "0 1 60%",
  },
  icon: {
    fontSize: "6rem",
    color: theme.palette.text.light,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  fileInputGroup: {
    position: "relative",
    marginRight: "auto",
  },
  fileInput: {
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
  },
  button: {
    flex: "2 1 20%",
    fontSize: "2.5rem",
    background: theme.palette.bcg.main,
    color: theme.palette.text.main,
    "&:hover": {
      background: theme.palette.primary.dark,
      color: theme.palette.bcg.main,
    },
  },
}));

export default useStyles;
