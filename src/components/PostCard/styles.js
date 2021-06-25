import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    postCard: {
        maxWidth: 345,
        margin: theme.spacing(4, 4, 2),
    },
    postDescription: {
        color: theme.palette.secondary.dark,
    },
    userText: {
        fontWeight: 'bold',
        marginLeft: '8px',
    }
  }));

  export default useStyles;