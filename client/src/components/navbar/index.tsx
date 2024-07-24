import { Box, Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const navList = [
  { label: 'Home', link: '/', icon: <HomeOutlinedIcon />},
  { label: 'Messages', link: '/messages', icon: <EmailOutlinedIcon />},
  { label: 'Search', link: '/search', icon: <SearchIcon />},
  { label: 'Notifications', link: '/notifications', icon: <NotificationsNoneOutlinedIcon />},
  { label: 'Profile', link: '/profile', icon: <PersonOutlineOutlinedIcon />},
]

const Navbar = () => {
  return (
    <Grid 
      item md={3}
      sx={{ backgroundColor: '#FFF', mt: { md: 4 }, bottom: 0, left: 0, position: { xs: 'fixed', md: 'static' }, borderRadius: { md: 2 }, p: 2, width: '100%' }}
      className="border">
      <List sx={{ display: { xs: 'none', md: 'block' }}}>
        {
          navList.map(item => {
            return(
              <Link to={item.link} className="link" key={item.label}>
                <ListItemButton key={item.label}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label}/>
                </ListItemButton>
              </Link>
            )
          })
        }
      </List>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', px: 2}}>
        {
          navList.map(item => {
            return(
              <Link className='link' to={item.link} key={item.label}>
                { item.icon }
              </Link>
            )
          })
        }
      </Box>
    </Grid>
  )
}

export default Navbar;