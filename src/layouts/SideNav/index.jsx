import React from 'react';
import { connect } from "react-redux";
import { tombolSidebar } from '../../redux/actions';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const SideNav = (props) => {
  const { getTombolSidebar: { isOpen }, tombolSidebar } = props;

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    tombolSidebar(!open);
  };

  return (
    <>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(isOpen)}
        onOpen={toggleDrawer(isOpen)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(isOpen)}
          onKeyDown={toggleDrawer(isOpen)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  )
}

const mapStateToProps = (state) => {
  const { getTombolSidebar } = state;
  return { getTombolSidebar }
}

export default connect(mapStateToProps, { tombolSidebar })(SideNav);