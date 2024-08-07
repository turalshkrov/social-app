import { Avatar, Box, colors } from "@mui/material";
import { CommentType } from "../../types";
import { Link } from "react-router-dom";
import moment from "moment";

interface CommentBoxProps {
  data: CommentType,
}
const CommentBox: React.FC<CommentBoxProps> = ({ data }) => {
  return (
    <Box sx={{ mt: 2, backgroundColor: '#F1F4F9', p: 2, borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to={`/profiles/${data.author._id}`}>
            <Avatar sx={{ width: 48, height: 48 }} src={data.author.avatar} />
          </Link>
          <Box sx={{ ml: 2 }}>
            <Link className="link" to={`/profiles/${data.author._id}`}>
              <Box sx={{ fontWeight: 'bold', display: 'inline', fontSize: 14 }}>{data.author.username}</Box>
            </Link>
            <Box sx={{ fontSize: 13, color: colors.grey[700] }}>{data.author.name}</Box>
          </Box>
        </Box>
        <Box sx={{ color: colors.grey[700], fontSize: 13 }}>
          {moment(data.createdAt).fromNow()}
        </Box>
      </Box>
      <Box sx={{ py: 2, lineHeight: 1.5, fontSize: 15 }}>
        {data.content}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end', fontSize: 14, m: 1 }} >
        <Box sx={{ cursor: 'pointer' }}>
          reply
        </Box>
      </Box>
    </Box>
  )
}

export default CommentBox;