export const addContact = contact => {
    return {
        type: "contacts/addContact",
        payload: {
            id: contact.id,
            name: contact.name,
            number: contact.number,
        }
    }
};

export const deleteContact = contactId => {
    return {
        type: "contacts/deleteContact",
        payload: contactId,
    }
};

export const contactsReducer = (state = {contacts: []}, action) => {
    switch (action.type) {
        case "contacts/addContact":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case "contacts/deleteContact":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        default:
            return state;
    }
};