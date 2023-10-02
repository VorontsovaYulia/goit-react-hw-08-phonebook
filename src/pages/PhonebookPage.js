import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useSelector } from "react-redux";

const PhonebookPage = () => {

    const contacts = useSelector(state => state.contacts.items);

    return <div>
        <ContactForm />
        {contacts.length > 0 && <Filter />}
        <ContactList />
    </div>
};

export default PhonebookPage;