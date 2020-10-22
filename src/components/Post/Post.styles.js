import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  post: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "5px",
    background: `${theme.palette.bcg.light}`,
    display: "flex",
    flexDirection: "column",
    height: "70vh",
  },
  post__avatar: {
    height: "5rem",
    width: "5rem",
    fontSize: "3.5rem",
    fontWeight: 500,
    border: `2.5px solid ${theme.palette.primary.main}`,
  },
  post__header: {
    display: "flex",
    alignItems: "center",
    padding: "2rem",
    color: `${theme.palette.text.main}`,
    letterSpacing: "1px",
    flex: "1 1 10%",
  },
  post__img: {
    objectFit: "cover",
    display: "block",
    overflow: "hidden",
    flex: "1 1 80%",
    width: "100%",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    borderTop: `1px solid ${theme.palette.secondary.main}`,
  },
  post__user: {
    marginLeft: "1rem",
    fontSize: "2.75rem",
    fontWeight: "400",
  },
  post__text: {
    fontWeight: "300",
    padding: "2rem",
    fontSize: "2.25rem",
    letterSpacing: "1px",
    wordSpacing: "2.15px",
    flex: "1 1 10%",
  },
  post__bold: {
    fontWeight: 700,
    letterSpacing: "1px",
  },
  post__slider: {
    flex: "2 1 80%",
    fontWeight: "300",
    padding: "2rem",
    fontSize: "2.25rem",
    letterSpacing: "1px",
    wordSpacing: "2.15px",
    textAlign: "justify",
  },
}));

export default useStyles;
