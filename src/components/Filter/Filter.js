import { useDispatch } from "react-redux"
import { TextField } from "@mui/material";
import { filterContact } from "redux/contacts/filterSlice";

export const Filter = () => {
    const dispach = useDispatch();
    
    return (
        <div>
            <TextField
                label="Search contact"
                id="filled-size-small"
                variant="filled"
                size="small"
                onChange={evt => dispach(filterContact(evt.currentTarget.value))} name="filter"
            />
        </div>
    )
};