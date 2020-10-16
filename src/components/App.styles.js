import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  app: {
    background: `${theme.palette.bcg.dark}`,
    width: "100vw",
    minHeight: "100vh",
  },
  app__header: {
    background: `${theme.palette.bcg.main}`,
    padding: "0 2rem",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  app__headerName: {
    fontFamily: "Sansita Swashed, cursive",
    fontSize: "2.5rem",
    color: `${theme.palette.text.main}`,
    letterSpacing: "1px",
  },
  app__headerLogo: {
    objectFit: "contain",
    width: "7.5rem",
  },
  app__container: {
    width: "80%",
    margin: "3rem auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "minmax(100px, auto)",
    gap: "1rem",
  },
  0: {
    gridColumn: "1 / 2",
  },
  1: {
    gridColumn: "2 / 4",
  },
}));

export default useStyles;
