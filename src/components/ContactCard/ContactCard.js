import { useDispatch } from "react-redux"
import { Wrapper } from "./ContactCard.styled"
import { deleteContact } from "redux/operations";

export const ContactCard = ({ item: { name, phone, id } }) => {

    const dispach = useDispatch();

    return (
        <Wrapper>
            <p>{name}: {phone}</p>
            <button onClick={() => dispach(deleteContact(id))
            }>Delete</button>
        </Wrapper>
    )
};