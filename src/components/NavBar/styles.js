import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontSize: '1.3rem',
      color: theme.palette.primary.main,
    },
    MuiAppBar: {
      backgroundColor: 'transparent',
    },
    toolbar: {
      margin: theme.spacing(0, 3),
    }
  }));

  export default useStyles;