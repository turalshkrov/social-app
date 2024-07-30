import { Avatar, Box, TextField } from "@mui/material";
import { useState } from "react";

const CommentInputBox = () => {
  const [ comment, setComment ] = useState("");
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setComment(target.value);
  }
  const handleSubmit: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      console.log(comment);
      setComment("");
    }
  }

  return (
    <Box sx={{ my: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Avatar  sx={{ width: 48, height: 48 }} src="https://mui.com/static/images/avatar/1.jpg"/>
      <TextField
        sx={{ width: { xs: '82%', md: '85%' }, fontSize: 15 }}
        placeholder="Share your thoughts here..."
        value={comment}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        inputProps={{ style: { padding: '10px 20px' } }}/>
    </Box>
  )
}

export default CommentInputBox;