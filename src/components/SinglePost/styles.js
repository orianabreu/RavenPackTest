import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  postTitle: {
    fontSize: theme.scale.title,
    fontWeight: "500",
    textAlign: "center",
    margin: theme.spacing(4, 0),
  },
  description: {
    fontSize: theme.scale.subtitle2,
    fontWeight: 300,
    margin: theme.spacing(2, 0),
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    fontSize: theme.scale.subtitle2,
  },
}));

export default useStyles;
