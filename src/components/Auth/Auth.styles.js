import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  app: {
    background: `${theme.palette.bcg.dark}`,
    width: "100vw",
    minHeight: "100vh",
  },
  btn: {
    backgroundColor: `${theme.palette.text.light}`,
    color: `${theme.palette.bcg.dark}`,
    padding: "0.85rem 3.5rem",
    fontSize: "1.6rem",
    "&.MuiButton-root:hover": {
      backgroundColor: `${theme.palette.primary.dark}`,
    },
  },
  popper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 5rem",
    "&:focus": {
      outline: "none",
    },
  },
  popper__form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    flex: "1 1 50%",
    "&:not(:last-child)": {
      marginRight: "5rem",
    },
    height: "80%",
  },
  popper__header: {
    fontSize: "4rem",
    fontWeight: "300",
    color: `${theme.palette.text.dark}`,
    marginBottom: "2rem",
  },
  popper__item: {
    marginBottom: "1.25rem",
  },
  popper__input: {
    fontSize: "2rem",
  },
  popper__inputs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  popper__btnPurple: {
    width: "100%",
    fontSize: "2rem",
    padding: "1rem 2.5rem",
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.bcg.dark}`,
    "&.MuiButton-root:hover": {
      backgroundColor: `${theme.palette.primary.main}`,
      color: `${theme.palette.bcg.dark}`,
    },
  },
  popper__btnWhite: {
    width: "100%",
    fontSize: "2rem",
    padding: "1rem 2.5rem",
    backgroundColor: `${theme.palette.bcg.main}`,
    color: `${theme.palette.text.dark}`,
    "&.MuiButton-root:hover": {
      backgroundColor: `${theme.palette.bcg.main}`,
      color: `${theme.palette.text.dark}`,
    },
  },
}));

export default useStyles;
