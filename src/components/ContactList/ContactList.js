import { ContactCard } from "components/ContactCard/ContactCard"
import { useSelector } from "react-redux"


export const ContactList = () => {

    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.filter.filter);
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