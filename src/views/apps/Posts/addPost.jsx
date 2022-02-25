import React from 'react'
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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

const fieldStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    width: '100% !important'
}

const AddPost = (props) => {
    const { location } = props;
    const { state: { addPosts } } = location;
    const history = useHistory();

    const handleClose = () => {
        history.goBack()
    };


    const handlePost = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Modal
                open={addPosts}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <form onSubmit={handlePost}>
                    <Box sx={{ ...style }}>
                        <TextField id="standard-basic" sx={fieldStyle} label="Title" name="title" variant="standard" required />
                        <TextField
                            sx={fieldStyle}
                            id="outlined-multiline-flexible"
                            label="Body"
                            multiline
                            maxRows={4}
                            name="body"
                            variant="standard"
                            required
                        />
                        <Button type="submit" variant="contained" >Create</Button>
                    </Box>
                </form>
            </Modal>
        </>
    )
}

export default AddPost; 