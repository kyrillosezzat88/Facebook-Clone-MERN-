import { Box , Typography } from "@material-ui/core"
import Profile from '../../Assets/images/profile.jpeg'
import './Friends.scss'
const Friends = () => {
    return (
        <Box className='Friends'>
            <Box className="title" display='flex' justifyContent='space-between' alignItems='flex-start' paddingY='10px'>
                <Box>
                    <Typography variant='h6'>Friends</Typography>
                    <Typography variant="subtitle">2202 friends</Typography>
                </Box>
                <Typography variant='subtitle2' color='primary'>See All Friends</Typography>
            </Box>
            <Box className="Content" display='flex' flexWrap='wrap'>
                <Box display='flex' flexDirection="column">
                    <img src={Profile} width='100px' height='100px' alt="friendName" />
                    <Typography variant="caption">Kyrillos</Typography>
                </Box>
                <Box display='flex' flexDirection="column">
                    <img src={Profile} width='100px' height='100px' alt="friendName" />
                    <Typography variant="caption">Kyrillos</Typography>
                </Box>
                <Box display='flex' flexDirection="column">
                    <img src={Profile} width='100px' height='100px' alt="friendName" />
                    <Typography variant="caption">Kyrillos</Typography>
                </Box>
                <Box display='flex' flexDirection="column">
                    <img src={Profile} width='100px' height='100px' alt="friendName" />
                    <Typography variant="caption">Kyrillos</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Friends