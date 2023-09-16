import { useDispatch } from "react-redux"
import { StyledLabel, StyledInput } from "./Filter.styled"
import { filterContact } from "redux/filterSlice";

export const Filter = () => {

    const dispach = useDispatch();
    
        return (
            <StyledLabel>Find contacts by name
                <StyledInput onChange={evt => dispach(filterContact(evt.currentTarget.value))} name="filter" />
            </StyledLabel>
        )    
}

