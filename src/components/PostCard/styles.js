import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    postCard: {
        maxWidth: 345,
        margin: '50px 30px 5px',
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