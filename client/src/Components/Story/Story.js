import { Box } from "@material-ui/core";
import Profile from '../../Assets/images/profile.jpeg'
import AddIcon from '@material-ui/icons/Add';
import './Story.scss'
const Story = () => {
    return(
        <Box className="Stories" display="flex" justifyContent="center" >
            <Box className="story noStory">
                <img className="storyImg" src="https://blog.iconosquare.com/wp-content/uploads/2019/06/Facebook-Stories-min.jpg" width="100%" />
                <Box className="Add" display="flex" justifyContent="center" alignItems="center">
                    <AddIcon />
                </Box>
                <p className="title ">Create Story</p>
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://blog.iconosquare.com/wp-content/uploads/2019/06/Facebook-Stories-min.jpg" width="100%" />
                <h6 className="title">Kyrillos</h6>
                <img src={Profile} alt="username" width="30px" height="30px" className="userImg" />
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://blog.iconosquare.com/wp-content/uploads/2019/06/Facebook-Stories-min.jpg" width="100%" />
                <h6 className="title">Kyrillos</h6>
                <img src={Profile} alt="username" width="30px" height="30px" className="userImg" />
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://blog.iconosquare.com/wp-content/uploads/2019/06/Facebook-Stories-min.jpg" width="100%" />
                <h6 className="title">Kyrillos</h6>
                <img src={Profile} alt="username" width="30px" height="30px" className="userImg" />
            </Box>
            <Box className="story">
                <img className="storyImg" src="https://blog.iconosquare.com/wp-content/uploads/2019/06/Facebook-Stories-min.jpg" width="100%" />
                <h6 className="title">Kyrillos</h6>
                <img src={Profile} alt="username" width="30px" height="30px" className="userImg" />
            </Box>
           
        </Box>
    )
}

export default Story;