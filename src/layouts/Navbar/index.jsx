import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { tombolSidebar, logout} from '../../redux/actions';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Navbar = (props) => {
  const history = useHistory();
  const { getTombolSidebar: { isOpen }, getAuth: { isAuthenticated }, postLike, tombolSidebar, logout } = props;

  const handleDrawerOpen = (isOpen) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    tombolSidebar(!isOpen);
  };


  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    logout()
    history.push('/');
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar position="static">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen(isOpen)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
            <Typography sx={{ fontWeight: '800', flexGrow: 1}} variant="h6" noWrap component="div">
            {isAuthenticated ? 'Admin' : 'Homepage'}
          </Typography>

            <IconButton>
              <FavoriteIcon sx={{ color: `${postLike.length > 0 ? '#d32f2f' : '#fff'}`}} />
            </IconButton>
              <IconButton onClick={handleOpenUserMenu}>
                <MoreIcon sx={{color:"#fff"}}/>
              </IconButton>
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
              {isAuthenticated ? (
                <MenuItem onClick={handleLogout}>
                  Logout
                </MenuItem>
              ) : (
                  <MenuItem onClick={handleCloseUserMenu} component={Link} to={{
                    pathname: "/login",
                    state: { hasLogin: true },
                  }}>
                    Login
                  </MenuItem>
                )}
            </Menu>
        </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

const mapStateToProps = (state) => {
  const { getTombolSidebar, getAuth, getLikePost: { postLike} } = state;
  return { getTombolSidebar, getAuth, postLike }
}

export default connect(mapStateToProps, { tombolSidebar, logout })(Navbar); 