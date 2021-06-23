import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    commentCard: {
        width: '100px',
        float: 'left',
        marginRight: '20px', 
        padding: '10px',
    },
    userImageStyle: {
        width: '100%', 
        borderRadius: '50%',
    },
    userComment: {
        marginLeft: '120px',
    }
  }));

  export default useStyles;