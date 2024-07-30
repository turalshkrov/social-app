import { Avatar, Box, colors } from "@mui/material";
import { PostType } from "../../types";
import { Link } from "react-router-dom";
import { useState } from "react";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentBox from "../comment";
import moment from "moment";
import PostMenu from "../post menu";

interface PostCardProps {
  data: PostType,
}

const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const likePost = () => {
    setIsLiked(!isLiked);
  }
  const toggleShowComment = () => {
    setShowComment(!showComment);
  }

  return (
    <Box sx={{ mb: 6, p: { md: 2 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to={`/profiles/${data.author._id}`}>
            <Avatar sx={{ width: 48, height: 48 }} src={data.author.avatar} />
          </Link>
          <Box sx={{ ml: 3 }}>
            <Link className="link" to={`/profiles/${data.author._id}`}>
              <Box sx={{ fontWeight: 'bold', display: 'inline', fontSize: 14 }}>{data.author.username}</Box>
            </Link>
            <Box sx={{ fontSize: 13, color: colors.grey[700] }}>{data.author.name}</Box>
          </Box>
        </Box>
        <Box sx={{ color: colors.grey[700], fontSize: 13, display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
          <PostMenu />
          {moment(data.createdAt).fromNow()}
        </Box>
      </Box>
      <Box sx={{ py: 2, lineHeight: 1.5, fontSize: 15 }}>
        {data.content}
      </Box>
      <Box>
        {data.media && <img src={data.media} className="post-media" />}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: colors.grey[600], cursor: 'pointer' }}
          onClick={toggleShowComment}>
          <ChatBubbleOutlineOutlinedIcon />
          <Box sx={{ ml: 1, fontSize: 15 }}>Comment</Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: colors.grey[600], cursor: 'pointer' }}
          onClick={likePost}>
          {isLiked ? <FavoriteIcon color="error" />
            : <FavoriteBorderOutlinedIcon />}
        </Box>
      </Box>
      {
        showComment &&
        <Box sx={{ mt: 4 }}>
          {
            data.comments.map(comment => {
              return <CommentBox data={comment} key={comment._id} />
            })
          }
        </Box>
      }
    </Box>
  )
}

export default PostCard;