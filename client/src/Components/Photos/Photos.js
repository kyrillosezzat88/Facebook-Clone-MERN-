import { Box, Typography } from '@material-ui/core';
import Profile from '../../Assets/images/profile.jpeg';
import './Photos.scss';
function Photos() {
  return (
    <Box className='PhotosSec'>
        <Box className="title" display='flex' justifyContent='space-between' alignItems='center' paddingY='10px'>
            <Typography variant='h6'>Photos</Typography>
            <Typography variant='subtitle2' color='primary'>See All Photos</Typography>
        </Box>
        <Box className='Photos' display='flex'>
            <img src={Profile} width='107px' height='107px' alt='userPic' />
            <img src={Profile} width='107px' height='107px' alt='userPic' />
            <img src={Profile} width='107px' height='107px' alt='userPic' />
        </Box>
    </Box>
  )
}

export default Photos