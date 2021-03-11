import { createReducer, combineReducers } from '@reduxjs/toolkit'
// import * as actions from './actions'
import {
    initContactsRequest,
    initContactsSuccess,
    initContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    delContactRequest,
    delContactSuccess,
    delContactError,
    filterContacts
} from './actions'

// const items = [];

// const initialState = {
//     contacts: {
//         // items,
//         filter: ''
//     }
// }

const initialState = {
    contacts: {
        items: [],
        filter: '',
        // isLoading: false,
        error: '',
    },
};

// console.log(actions);

// const items = createReducer(initialState,
//     {
//         [actions.initContactsSuccess]: (state, action) => {
//             state.contacts.items = action.payload;
//         },
//         [actions.addContactSuccess]: (state, action) => {
//             state.contacts.items = [...state.contacts.items, action.payload];
//         },
//         [actions.delContactSuccess]: (state, action) => {
//             let filtered = state.contacts.items.filter(({ id }) => id !== action.payload);
//             state.contacts.items = filtered;
//         },
//         [actions.filter]: (state, action) => {
//             state.contacts.filter = action.payload;
//         },
//     }
// );

const items = createReducer([], {
    [initContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],
    [delContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    [filterContacts]: (_, { payload }) => payload
});

// console.log(reducer);

const loading = createReducer(false, {
    [initContactsRequest]: () => true,
    [initContactsSuccess]: () => false,
    [initContactsError]: () => false,

    [delContactRequest]: () => true,
    [delContactSuccess]: () => false,
    [delContactError]: () => false,

    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
});

export default combineReducers({
    items,
    // reducer,
    loading,
});

// export default reducer;
