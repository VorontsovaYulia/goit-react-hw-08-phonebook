import { Wrapper } from "./ContactCard.styled"

export const ContactCard = ({ item: { id, name, number }, onDelete }) => {
    return (
        <Wrapper>
            <p>{name}: {number}</p>
            <button onClick={()=> onDelete(id)}>Delete</button>
        </Wrapper>
    )
}