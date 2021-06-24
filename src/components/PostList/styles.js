import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading: { 
        fontSize: '4rem',
        fontWeight: '500',
        textAlign: 'center',
        margin: '30px 0',
    },
    text: {
        textAlign: 'center',
        lineHeight: 2,
    }
  }));

  export default useStyles;