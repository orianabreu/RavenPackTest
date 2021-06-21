import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
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
    }
  }));

  export default useStyles;