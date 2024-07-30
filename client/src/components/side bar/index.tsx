import { Avatar, Box, colors, Grid, IconButton, List, ListItem, ListSubheader } from "@mui/material";
import { UserType } from "../../types";
import { Link } from "react-router-dom";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const data: UserType[] = [
  {
    _id: '1',
    name: "Travis Howard",
    username: "travis",
    email: "remy@mail.com",
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    createdAt: new Date('12.12.2024'),
    following: [],
    followers: [],
    posts: []
  },
  {
    _id: '2',
    name: "Remy Sharp",
    username: "remy",
    email: "remy@mail.com",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    createdAt: new Date('12.12.2024'),
    following: [],
    followers: [],
    posts: []
  },
  {
    _id: '3',
    name: "Thomas Lee",
    username: "lee",
    email: "remy@mail.com",
    avatar: "https://mui.com/static/images/avatar/3.jpg",
    createdAt: new Date('12.12.2024'),
    following: [],
    followers: [],
    posts: []
  },
  {
    _id: '5',
    name: "Leo Harris",
    username: "leo",
    email: "remy@mail.com",
    avatar: "https://mui.com/static/images/avatar/4.jpg",
    createdAt: new Date('12.12.2024'),
    following: [],
    followers: [],
    posts: []
  }
];

const SideBar = () => {
  return (
    <Grid
      item md={3}
      sx={{
        display: { xs: 'none', md: 'block' },
        px: { md: 2 },
        mt: 4,
        height: 'min-content',
        position: 'sticky',
        top: '104px',
        borderRadius: { md: 2 },
        width: '100%'
      }}
      className="border">
      <List>
        <ListSubheader sx={{ fontWeight: 'bold' }}>
          Suggested Friends
        </ListSubheader>
        {
          data.map(user => {
            return (
              <ListItem key={user._id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Link to={`/profiles/${user._id}`}>
                    <Avatar sx={{ width: 48, height: 48 }} src={user.avatar} />
                  </Link>
                  <Box sx={{ ml: 2 }}>
                    <Link className="link" to={`/profiles/${user._id}`}>
                      <Box sx={{ fontWeight: 'bold', display: 'inline', fontSize: 14 }}>{user.username}</Box>
                    </Link>
                    <Box sx={{ fontSize: 13, color: colors.grey[700] }}>{user.name}</Box>
                  </Box>
                </Box>
                <Box sx={{ color: colors.grey[700] }}>
                  <IconButton>
                    <AddOutlinedIcon />
                  </IconButton>
                </Box>
              </ListItem>
            )
          })
        }
      </List>
    </Grid>
  )
}

export default SideBar;