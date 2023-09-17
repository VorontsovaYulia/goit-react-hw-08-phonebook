import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact(state, action) {
            for (const el of state) {
                if (el.name === action.payload.name) {
                    return alert(`${el.name} is already in contacts.`)
                };
            };
            state.push(action.payload)
        },
        deleteContact(state, action) {
            return state = state.filter(contact => contact.id !== action.payload)
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;