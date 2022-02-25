import React from 'react';
import { connect } from "react-redux";
import { tombolSidebar} from '../../redux/actions';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';


const Navbar = (props) => {
  const { getTombolSidebar: { isOpen }, tombolSidebar } = props;

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
            Homepage
          </Typography>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MoreIcon color="inherit" edge="start"/>
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
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </>
  )
}

const mapStateToProps = (state) => {
  const { getTombolSidebar } = state;
  return { getTombolSidebar }
}

export default connect(mapStateToProps, { tombolSidebar })(Navbar); 