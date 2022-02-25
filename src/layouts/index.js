import React from 'react'
import Navbar from './Navbar'
import SideNav from './SideNav'
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';


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

function Layouts({children}) {
  return (
      <>
      <Navbar />
      <Main>
        <SideNav />
        <DrawerHeader />
        <Container maxWidth="xl">
          {children}
        </Container>
      </Main>
      </>
  )
}

export default Layouts