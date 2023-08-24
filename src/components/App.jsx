import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useEffect, useState } from "react";

const initialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  };
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = contact => {
    for (const el of contacts) {
      if (el.name === contact.name) {
        return alert(`${el.name} is already in contacts.`)
      }
    }
    setContacts(prevState => [...prevState, contact])
  };
  
  const handleDelete = cardId => {
    setContacts(prevState => prevState.filter(el => el.id !== cardId))
  };
  
  const filterContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={(value)=>{setFilter(value)}} />
      <ContactList listFilter={filterContacts} onDelete={handleDelete} />
      <GlobalStyle />
    </div>
  );
}

