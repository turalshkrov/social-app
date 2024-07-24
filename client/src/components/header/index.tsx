import React, { useState } from 'react';
import { Box, Container, InputAdornment, TextField } from '@mui/material';
import { useAppDispatch } from '../../hook/hook';
import { Link, useNavigate } from 'react-router-dom';
import { PersonOutline } from '@mui/icons-material';
import { setIsOpen } from '../../redux/slices/modalSlice';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const dispatch = useAppDispatch();
  const [ searchKey, setSearchKey ] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(target.value);
  }
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(searchKey) {
      navigate('/search');
      setSearchKey('');
    }
  }

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "space-between" }, alignItems: "center", py: 2 }}>
        <Box sx={{ fontWeight: "bold", fontSize: 20 }}>
          <Link to="/" className='link'>
            Connectr
          </Link>
        </Box>
        <form onSubmit={handleSubmit} style={{ width: '50%' }}>
          <TextField
            className='search-input'
            sx={{ width: '100%', display: { xs: 'none', md: 'block' } }}
            placeholder='Search'
            value={searchKey}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: { width: '100%' }
            }}
          />
        </form>
        <Box
          sx={{ alignItems: "center", display: { xs: 'none', md: 'flex', cursor: 'pointer' } }}
          onClick={() => dispatch(setIsOpen({ id: "logout", isOpen: true }))}>
          <Box sx={{ mr: 2 }}>
            Logout
          </Box>
          <PersonOutline />
        </Box>
      </Box>
    </Container>
  )
}

export default Header;