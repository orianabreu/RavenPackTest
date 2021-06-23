import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    postTitle: {
        fontSize: '4rem',
        fontWeight: '500',
        textAlign: 'center',
        margin: '30px 0',
    },
    description: {
        fontSize: '1.5rem',
        fontWeight: '100',
        margin: '20px 0',
    },
    userAvatar: {
        margin: '0 10px',
    },
    commentContainer: {
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        margin: '10px 0',
    },
    subtitle: {
        marginBottom: '20px',
    }
  }));

  export default useStyles;