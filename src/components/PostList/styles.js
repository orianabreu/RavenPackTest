import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading: { 
        fontSize: '4rem',
        fontWeight: '500',
        textAlign: 'center',
        margin: theme.spacing(4, 0),
    },
    text: {
        textAlign: 'center',
        lineHeight: 2,
    }
  }));

  export default useStyles;