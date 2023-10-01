import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { ContactCard } from "components/ContactCard/ContactCard"
import { selectContacts, selectFilter } from "redux/contacts/selectors";
import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filterContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.contacts.isLoading)
    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    return (
        isLoading ? <Box sx={{ width: '100%', marginTop: 4}}>
                <LinearProgress />
            </Box> :
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
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