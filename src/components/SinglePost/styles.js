import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    postTitle: {
        fontSize: '4rem',
        fontWeight: '500',
        textAlign: 'center',
        margin: theme.spacing(4, 0),
    },
    description: {
        fontSize: '1.5rem',
        fontWeight: '100',
        margin: theme.spacing(2, 0),
    },
    subtitle: {
        marginBottom: theme.spacing(2),
    }
  }));

  export default useStyles;