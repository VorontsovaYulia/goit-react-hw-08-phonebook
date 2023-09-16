export const filterContact = text => {
    return {
        type: "contacts/filterContact",
        payload: text,
    }
};

export const filterReducer = (state = {
    filter: ""
}, action) => {
    switch (action.type) {
        case "contacts/filterContact":
            return {
                ...state,
                filter: action.payload,
            }
        default:
            return state;
    }
};