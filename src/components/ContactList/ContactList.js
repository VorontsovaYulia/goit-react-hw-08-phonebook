import { useSelector } from "react-redux"
import { ContactCard } from "components/ContactCard/ContactCard"
import { selectContacts, selectFilter} from "redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filterContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul>
            {filterContacts.map(el => (
                <li key={el.id}>
                    <ContactCard item={el} />
                </li>
            ))}
        </ul>
    )
};