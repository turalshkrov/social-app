import { useState } from 'react';
import { MoreHoriz } from '@mui/icons-material';
import { colors } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

const ITEM_HEIGHT = 48;

export default function PostMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        size='small'
        onClick={handleClick}
      >
        <MoreHoriz sx={{ fontSize: 20 }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem sx={{ color: colors.grey[700], fontSize: 15 }} onClick={handleClose}>
          <PersonOutlineIcon sx={{ mr: 1, fontSize: 18 }} />
          View profile
        </MenuItem>
        <MenuItem sx={{ color: colors.grey[700], fontSize: 15 }} onClick={handleClose}>
          <PersonAddAltIcon sx={{ mr: 1, fontSize: 18 }} />
          Follow user
        </MenuItem>
        <MenuItem sx={{ color: colors.grey[700], fontSize: 15 }} onClick={handleClose}>
          <ShareOutlinedIcon sx={{ mr: 1, fontSize: 18 }} />
          Share the post
        </MenuItem>
        <MenuItem sx={{ color: colors.grey[700], fontSize: 15 }} onClick={handleClose}>
          <FlagOutlinedIcon sx={{ mr: 1, fontSize: 18 }} />
          Report the post
        </MenuItem>
      </Menu>
    </div>
  );
}


