import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: `${theme.palette.bcg.main}`,
    padding: "0 2rem",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header__name: {
    fontFamily: "Sansita Swashed, cursive",
    fontSize: "2.5rem",
    color: `${theme.palette.text.main}`,
    letterSpacing: "1px",
  },
  header__logo: {
    objectFit: "contain",
    width: "7.5rem",
  },
}));

export default useStyles;
