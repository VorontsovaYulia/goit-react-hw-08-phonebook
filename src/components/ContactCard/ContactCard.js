import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch} from "react-redux"
import { deleteContact, updateContact } from "redux/operations";
import { useState } from 'react';
import { TextField } from '@mui/material';

export const ContactCard = ({ item: { name, number, id } }) => {
    const [open, setOpen] = useState(false);
    const dispach = useDispatch();
   
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.dir(evt.currentTarget)
        const data = new FormData(evt.currentTarget);
        const newContact = {
            id,
            contact: {
                name: data.get('name'),
                number: data.get('number'),
            }
        };
        console.log(newContact)
        dispach(updateContact(newContact))
        handleCloseModal();
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right">{number}</TableCell>
            <TableCell align="right"><button id={id} onClick={(evt) => handleOpenModal()
            }>Edit</button></TableCell>
            <TableCell align="right"><button onClick={() => dispach(deleteContact(id))
            }>Delete</button></TableCell>
            
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Contact
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField id="standard-basic" name="name" variant="standard" defaultValue={name} />
                        <TextField id="standard-basic" name="number" variant="standard" defaultValue={number} />
                        <Button type='submit'>Done</Button>
                    </Box>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>
                </Box>
            </Modal> 
        </> 
    )
};