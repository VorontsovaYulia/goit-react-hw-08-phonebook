import { useDispatch } from "react-redux"
import { Wrapper } from "./ContactCard.styled"
import { deleteContact } from "redux/contactsSlice";

export const ContactCard = ({ item: { name, number, id } }) => {

    const dispach = useDispatch();

    return (
        <Wrapper>
            <p>{name}: {number}</p>
            <button onClick={() => dispach(deleteContact(id))
            }>Delete</button>
        </Wrapper>
    )
};