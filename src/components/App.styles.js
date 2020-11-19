import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  app: {
    background: `${theme.palette.bcg.dark}`,
    width: "100vw",
    minHeight: "100vh",
    paddingBottom: "22.5vh",
  },
}));

export default useStyles;
