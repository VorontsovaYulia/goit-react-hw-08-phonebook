import { StyledLabel, StyledInput } from "./Filter.styled"

export const Filter = ({ filter }) => {
    
   const handleFilter = (evt) => {
       filter(evt.currentTarget.value)
    }
        return (
            <StyledLabel>Find contacts by name
                <StyledInput onChange={handleFilter} name="filter" />
            </StyledLabel>
        )    
}

