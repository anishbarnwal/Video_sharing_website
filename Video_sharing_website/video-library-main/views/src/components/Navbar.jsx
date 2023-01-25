import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import VideoFileIcon from '@mui/icons-material/VideoFile';


import { signOut } from '../actions/AuthAction'


const Navbar = () => {

    const dispatch = useDispatch()
    const user = useSelector((state)=> state.authReducer.authData)

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignOut = () => {
    dispatch(signOut());
    handleCloseUserMenu();
  }

  return (
    <AppBar position="static" sx={{flexGrow: 1, borderRadius: 1}}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <VideoFileIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Video Library
          </Typography>
          <VideoFileIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 300,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Video Library
          </Typography>
          </Box>
          {user ? <Box sx={{ flexGrow: 0, display: 'flex',alignItems: 'center' }}>
          <Typography 
            variant="h5"
            href={`/user/${user._id}`}
            noWrap
            component="a"
            sx={{
            mr: 1,
            display: 'flex',
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: { xs: 300, md: 700},
            letterSpacing: {xs: '.05rem', md:'.3rem'},
            color: 'inherit',
            textDecoration: 'none',
            }}
            >{user.username}</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={`${user.fullName}`} src={`${user?.image}`} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography 
                  textAlign="center" 
                  href={`/dashboard/${user._id}`}
                  noWrap
                  component="a"
                  sx={{ 
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  >
                    Dashboard
                </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography 
                     textAlign="center"
                     href={`/user/${user._id}`}
                     noWrap
                     component="a"
                     sx={{ 
                         textDecoration: 'none',
                         color: 'inherit',
                     }}
                     >
                        Profile
                     </Typography>
                </MenuItem>
                <MenuItem onClick={handleSignOut}>
                  <Typography 
                   textAlign="center" 
    	          >
                    Sign Out
                  </Typography>
                </MenuItem>
            </Menu>
          </Box> : <Box>
            <Typography
                variant="h5"
                href="/auth"
                noWrap
                component="a"
                sx={{
                mr: 1,
                display: 'flex',
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: { xs: 300, md: 700},
                letterSpacing: {xs: '.05rem', md:'.3rem'},
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Sign In
            </Typography>
            </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
