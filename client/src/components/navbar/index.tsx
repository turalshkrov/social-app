import { Box, Grid, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const navList = [
  { label: 'Home', link: '/', icon: <HomeOutlinedIcon sx={{ fontSize: 26 }} />},
  { label: 'Messages', link: '/messages', icon: <EmailOutlinedIcon sx={{ fontSize: 26 }}/>},
  { label: 'Search', link: '/search', icon: <SearchIcon sx={{ fontSize: 26 }}/>},
  { label: 'Notifications', link: '/notifications', icon: <NotificationsNoneOutlinedIcon sx={{ fontSize: 26 }}/>},
  { label: 'Profile', link: '/profile', icon: <PersonOutlineOutlinedIcon sx={{ fontSize: 26 }}/>},
]

const Navbar = () => {
  return (
    <Grid 
      item
      sx={{
        zIndex: 99,
        backgroundColor: '#FFF',
        mt: 4,
        bottom: { xs: 0, md: 'inherit' },
        left: { xs: 0, md: 'inherit' },
        top: { md: '104px' },
        position: { xs: 'fixed', md: 'sticky' },
        borderRadius: { md: 2 },
        p: { xs: 1, md: 2 },
        width: { xs: '100%', md: '25%' },
        height: 'min-content' 
      }}
      className="border">
      <List sx={{ display: { xs: 'none', md: 'block' }}}>
        {
          navList.map(item => {
            return(
              <NavLink to={item.link} className="link" key={item.label}>
                <ListItemButton key={item.label}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label}/>
                </ListItemButton>
              </NavLink>
            )
          })
        }
      </List>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', px: 2}}>
        {
          navList.map(item => {
            return(
              <NavLink className='navlink' to={item.link} key={item.label}>
                { item.icon }
              </NavLink>
            )
          })
        }
      </Box>
    </Grid>
  )
}

export default Navbar;