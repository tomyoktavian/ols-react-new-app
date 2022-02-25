import React from 'react'
import Navbar from './Navbar'
import SideNav from './SideNav'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const Main = styled('main', { shouldForwardProp: (prop) => prop })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(4,3,3,3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>
        <SideNav />
        <DrawerHeader />
        <Container maxWidth="xl">
          {children}

          <Fab sx={fabStyle} color="primary" aria-label="add">
            <AddIcon />
          </Fab>

        </Container>
      </Main>
    </>
  )
}

export default Layouts