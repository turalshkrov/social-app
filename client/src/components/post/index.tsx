import { Avatar, Box, colors } from "@mui/material";
import { PostType } from "../../types";
import { Link } from "react-router-dom";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

interface PostCardProps {
  data: PostType,
}

const PostCard: React.FC<PostCardProps> = ({ data })  => {
  return (
    <Box sx={{ p: 1, mt: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to={`/profiles/${data.author._id}`}>
            <Avatar sx={{ width: 56, height: 56 }} src={data.author.avatar}/>
          </Link>
          <Box sx={{ ml: 3 }}>
            <Link className="link" to={`/profiles/${data.author._id}`}>
              <Box sx={{ fontWeight: 'bold', display: 'inline' }}>{data.author.username}</Box>
            </Link>
            <Box>{data.author.name}</Box>
          </Box>
        </Box>
        <Box sx={{ color: colors.grey[700], fontSize: 13 }}>
          {data.createdAt.toDateString()}
        </Box>
      </Box>
      <Box sx={{ py: 4, lineHeight: 1.8 }}>
        {data.content}
      </Box>
      <Box>
        <img src={data.media} className="post-media" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: colors.grey[600], cursor: 'pointer' }}>
          <ChatBubbleOutlineOutlinedIcon />
          <Box sx={{ ml: 1 }}>Comment</Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: colors.grey[600], cursor: 'pointer' }}>
          <FavoriteBorderOutlinedIcon />
        </Box>
      </Box>
    </Box>
  )
}

export default PostCard;