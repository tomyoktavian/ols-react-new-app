import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { tombolSidebar} from '../../redux/actions';
import MuiAppBar from '@mui/material/AppBar';
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
  const { getTombolSidebar: { isOpen }, getAuth: { isAuthenticated }, tombolSidebar } = props;

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

  return (
    <>
      <MuiAppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen(isOpen)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{fontWeight: '800'}} variant="h6" noWrap component="div">
            {isAuthenticated ? 'Admin' : 'Homepage'}
          </Typography>


          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <FavoriteIcon color="inherit" edge="start" />
            </IconButton>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MoreIcon color="inherit" edge="start"/>
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Link
                  to={{
                    pathname: "/login",
                    state: { hasLogin: true },
                  }}
                >
                  <Typography textAlign="center">Login</Typography>
                </Link>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </>
  )
}

const mapStateToProps = (state) => {
  const { getTombolSidebar, getAuth } = state;
  return { getTombolSidebar, getAuth }
}

export default connect(mapStateToProps, { tombolSidebar })(Navbar); 