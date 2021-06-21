import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        overflow: 'hidden',
        maxHeight: '90vh',
        maxWidth: '100%', 
    },
    homeImage: {
        height: '100%',
        width: '100%',
    },
    textOverlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
    },
    homeText: {
        fontWeight: 500,
        fontSize: '6rem',
        color: theme.palette.primary.white,
    }
  }));

  export default useStyles;