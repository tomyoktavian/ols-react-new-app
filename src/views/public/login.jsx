import React from 'react'
import { connect } from "react-redux";
import { login } from '../../redux/actions';
import {useHistory} from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from './../../API';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  display: 'flex',
  flexDirection: 'column',
  '& .MuiTextField-root': { width: '25ch' },
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Login = (props) => {
  const { location, login } = props;
  const { state: { hasLogin } } = location;
  const history = useHistory();

  const handleClose = () => {
    history.goBack()
  };
  

  const handleLogin = (e) => {
    e.preventDefault();
    API.authUser(e.target.userId.value).then(res => {
      login(res);
        handleClose();
        history.push('/admin')
    })
  };
  
  return (
    <>
      <Modal
        open={hasLogin}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <form onSubmit={handleLogin}>
        <Box sx={{ ...style }}>
            <TextField label="User ID" name="userId" id="margin-none" required sx={{width:'100% !important', padding: '5px 0'}}/>
            <TextField label="Email" name="email" type="email" id="margin-dense" margin="dense" required sx={{width:'100% !important', padding: '5px 0'}}/>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginTop: '10px' }}>
              <Button type="cencel" variant="outlined" onClick={() => handleClose()} sx={{marginRight: '10px'}} >Cencel</Button>
              <Button type="submit" variant="contained" >Login</Button>
            </Box>
        </Box>
          </form>
      </Modal>
    </>
  )
}

export default connect( null, { login } )(Login); 