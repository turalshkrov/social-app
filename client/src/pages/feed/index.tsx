import { Grid } from "@mui/material";
import Post from "../../components/post";
import { PostType } from "../../types";

const data: PostType = {
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
  media: "https://picsum.photos/300/200",
  likes: [],
  comments: [],
  createdAt: new Date('12.12.2024'),
}

const Feed = () => {
  return (
    <Grid item xs={12} md={6} sx={{ mt: { md: 4 }, p: { md: 2 } }}>
      <h1>Home</h1>
      <Post data={data}/>
      <Post data={data}/>
      <Post data={data}/>
    </Grid>
  )
}

export default Feed;