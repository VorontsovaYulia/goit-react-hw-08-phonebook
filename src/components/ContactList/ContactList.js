import { ContactCard } from "components/ContactCard/ContactCard"

export const ContactList = ({listFilter, onDelete}) => {
    return (
        <ul>
            {listFilter.map(el => (
                <li key={el.id}>
                    <ContactCard item={el} onDelete={onDelete}  />
                </li>
            ))}
        </ul>
    )
}