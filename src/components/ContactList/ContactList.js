import { useSelector } from "react-redux"
import { ContactCard } from "components/ContactCard/ContactCard"

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filter);
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