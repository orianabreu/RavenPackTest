import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    commentCard: {
        width: '100px',
        float: 'left',
        marginRight: theme.spacing(2), 
        padding: theme.spacing(1),
    },
    userImageStyle: {
        width: '100%', 
        borderRadius: '50%',
    },
    userComment: {
        marginLeft: theme.spacing(14),
        fontSize: theme.scale.paragraph,
        fontWeight: 300,
    },
    userInfo: {
        fontSize: theme.scale.paragraph,
    }
  }));

  export default useStyles;