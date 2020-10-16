import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  post: {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "5px",
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
  },
  post__img: {
    objectFit: "cover",
    height: "50vh",
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
    textAlign: "justify",
  },
  post__bold: {
    fontWeight: 700,
    letterSpacing: "1px",
  },
}));

export default useStyles;
