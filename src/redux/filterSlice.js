import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        filterContact(state, action) {
            return state = action.payload;
        }
    }
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// export const filterContact = text => {
//     return {
//         type: "contacts/filterContact",
//         payload: text,
//     }
// };

// export const filterReducer = (state = {
//     filter: ""
// }, action) => {
//     switch (action.type) {
//         case "contacts/filterContact":
//             return {
//                 ...state,
//                 filter: action.payload,
//             }
//         default:
//             return state;
//     }
// };