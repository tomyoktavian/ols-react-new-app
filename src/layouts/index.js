import React from 'react'
import Navbar from './Navbar'
import SideNav from './SideNav'
import { styled } from '@mui/material/styles';

const Main = styled('main', { shouldForwardProp: (prop) => prop })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(1, 2),
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
      <SideNav />
      <Main>
        <DrawerHeader />
        {children}
      </Main>
      </>
  )
}

export default Layouts