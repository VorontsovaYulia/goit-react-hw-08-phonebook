import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    };
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };
  };

  addContact = contact => {
    
    for (const el of this.state.contacts) {
          if (el.name === contact.name) {
            return alert(`${el.name} is already in contacts.`)
          }
        }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
  };

  getFilter = (value) => {
    this.setState({
      filter: value,
    })
  }

  handleDelete = (cardId) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el=> el.id !== cardId)
      }
    })

  }

  render() { 
    const filterContacts = this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter.toLowerCase()));
      
    return (
        <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
          <h2>Contacts</h2>
          <Filter filter={this.getFilter} />
        <ContactList listFilter={filterContacts} onDelete={this.handleDelete} />
          <GlobalStyle />
        </div>
      );
    }
  }
