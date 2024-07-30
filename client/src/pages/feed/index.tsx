import { Box, Grid } from "@mui/material";
import Post from "../../components/post";
import { PostType } from "../../types";

const data: PostType[] = [{
  _id: '1',
  author: {
    _id: '1',
    name: "Remy Sharp",
    username: "remy",
    email: "remy@mail.com",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    createdAt: new Date('12.12.2024'),
    following: [],
    followers: [],
    posts: []
  },
  content: "In today's fast-paced, digitally driven world, digital marketing is not just a strategy. it's a necessity for businesses of all sizes. 📈",
  likes: [],
  comments: [{
    _id: "1",
    author: {
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
    postId: "1",
    content: "Fantastic post! Your content always brings a smile to my face. Keep up the great work! 👏 ",
    createdAt: new Date('12.12.2023')
  },
  {
    _id: "2",
    author: {
      _id: '1',
      name: "David Martinez",
      username: "david",
      email: "remy@mail.com",
      avatar: "https://mui.com/static/images/avatar/3.jpg",
      createdAt: new Date('12.12.2024'),
      following: [],
      followers: [],
      posts: []
    },
    postId: "1",
    content: " Your positivity is contagious! Thanks for brightening up my feed. Have a fantastic day!",
    createdAt: new Date('12.12.2023')
  }],
  createdAt: new Date('12.12.2023'),
},{
  _id: '2',
  author: {
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
  content: "Prepare to be dazzled by our latest collection! From trendy fashion to must-have gadgets, we've got something for everyone. ",
  media: "https://picsum.photos/300/200",
  likes: [],
  comments: [],
  createdAt: new Date('07.30.2024'),
}]

const Feed = () => {
  return (
    <Grid item xs={12} md={6} sx={{ mt: { md: 4 }, p: { md: 2 } }}>
      <Box>
        {
          data.map(post => {
            return (
              <Post data={post} key={post._id}/>
            )
          })
        }
      </Box>
    </Grid>
  )
}

export default Feed;