import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux"
import { ContactCard } from "components/ContactCard/ContactCard"
import { selectContacts, selectFilter} from "redux/selectors";
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { stepButtonClasses } from '@mui/material';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filterContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.contacts.isLoading)
    console.log(isLoading)
    useEffect(() => {
    dispatch(fetchContacts())
    }, [dispatch]);
    
    return (
        isLoading ? "Loading" :
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Avatar</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filterContacts.map(el => 
                            <TableRow
                                key={el.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <ContactCard item={el} />
                            </TableRow>
                        )}
                        
                            
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};