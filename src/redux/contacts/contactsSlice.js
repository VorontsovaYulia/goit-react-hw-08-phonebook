import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, updateContact } from "./operations";
import { logOut } from "../auth/authOperations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.isLoading = false;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(contact => contact.id !== action.payload.id);
                state.isLoading = false;
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.items = state.items.map(el => {
                    if (el.id === action.payload.id) {
                        return action.payload;
                    }
                    return el;
                })
                state.isLoading = false;
            })
            .addCase(logOut.fulfilled, state => {
                state.items = [];
                state.isLoading = false;
                state.error = null;
            })
            
});

export const contactsReducer = contactsSlice.reducer;