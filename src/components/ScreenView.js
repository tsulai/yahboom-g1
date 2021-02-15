import React, { useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import {APIContext} from '../App'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth : 532,
     
    },
    media: {      
      height: 0,
    paddingTop: '56.25%', // 16:9
    },    
  }));
 
  function ScreenView(props) {
    const apiContext = useContext(APIContext) 
    const [image, setImage] = React.useState(apiContext.video)
    const classes = useStyles();      
    React.useEffect(()=>{
      setImage(apiContext.video)
    },[apiContext.video])
    //console.log('video src in state :' + image)
      return (
        <div>
          {image ?
            (<Card className={classes.root}>
              <CardMedia
                  className={classes.media}
                  image={image}
                  title=""
              />
          </Card>) : <Card className={classes.root}><CardMedia
                  className={classes.media}
                  image="/images/532x399.jpg"
                  title=""
              /></Card>
          }              
         </div> 
        
      );
  }
  
  export default ScreenView;


