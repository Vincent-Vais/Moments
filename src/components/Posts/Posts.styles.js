import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "90%",
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
  2: {
    gridColumn: "1 / 4",
  },
  3: {
    gridColumn: "1 / 2",
  },
  4: {
    gridColumn: "2 / 3",
  },
  5: {
    gridColumn: "3 / 4",
  },
}));

export default useStyles;
