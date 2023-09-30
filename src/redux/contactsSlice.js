// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "./operations";

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//     },
//     extraReducers: builder =>
//         builder
//             .addCase(fetchContacts.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(fetchContacts.fulfilled, (state, action) => {
//                 state.items = action.payload;
//                 state.isLoading = false;
//             })
//             .addCase(fetchContacts.rejected, (state, action) => {
//                 state.error = action.payload;
//                 state.isLoading = false;
//             })
//             .addCase(addContact.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(addContact.fulfilled, (state, action) => {
//                 state.items.push(action.payload);
//                 state.isLoading = false;
//             })
//             .addCase(addContact.rejected, (state, action) => {
//                 state.error = action.payload;
//                 state.isLoading = false;
//             })
//             .addCase(deleteContact.pending, (state) => {
//                 state.isLoading = true;
//                 state.error = null;
//             })
//             .addCase(deleteContact.fulfilled, (state, action) => {
//                 state.items = state.items.filter(contact => contact.id !== action.payload.id);
//                 state.isLoading = false;
//             })
//             .addCase(deleteContact.rejected, (state, action) => {
//                 state.error = action.payload;
//                 state.isLoading = false;
//             })            
// });

// export const contactsReducer = contactsSlice.reducer;