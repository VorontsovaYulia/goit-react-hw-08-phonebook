import { useState } from 'react';
import { useDispatch} from "react-redux"
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Grid from '@mui/material/Grid';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Avatar from '@mui/material/Avatar';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { deleteContact, updateContact } from "redux/contacts/operations";
import { StyledBox, Text } from './ContactCard.styled';

export const ContactCard = ({ item: { name, number, id } }) => {
    const [open, setOpen] = useState(false);
    const dispach = useDispatch();
   
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const data = new FormData(evt.currentTarget);
        const newContact = {
            id,
            contact: {
                name: data.get('name'),
                number: data.get('number'),
            }
        };
        dispach(updateContact(newContact))
        handleCloseModal();
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #1976d2',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <TableCell component="th" scope="row">
                <Avatar src="/broken-image.jpg" sx={{ backgroundColor: '#1976d2', margin: '0 auto' }} />
            </TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{number}</TableCell>
            <TableCell align="center">
                <Grid item xs={8}>
                    <EditNoteIcon cursor='pointer' onClick={() => handleOpenModal()
                    } />
                </Grid>
                
            </TableCell>
            <TableCell align="center">
                <Grid item xs={8}>
                    <DeleteForeverIcon cursor='pointer' onClick={() => dispach(deleteContact(id))} />
                </Grid>
            </TableCell>
            
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <Text>Edit contact</Text>
                    </Typography>
                    <StyledBox component="form" onSubmit={handleSubmit}>
                        <TextField id="standard-basic" name="name" variant="standard" defaultValue={name} />
                        <TextField id="standard-basic" name="number" variant="standard" defaultValue={number} />
                        <Button type='submit'><TaskAltIcon sx={{ fontSize: 40 }} /></Button>
                    </StyledBox>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
};