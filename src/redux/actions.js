import { createAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// const initContacts = createAction('app/initState');
export const initContactsRequest = createAction('app/initStateRequest');
export const initContactsSuccess = createAction('app/initStateSuccess');
export const initContactsError = createAction('app/initStateError');

// const addContact = createAction('form/addContact', (name, number) => {
//     return {
//         payload: {
//             id: uuidv4(),
//             name,
//             number,
//         }
//     }
// });

export const addContactRequest = createAction('form/addContactRequest', (name, number) => {
    return {
        payload: {
            id: uuidv4(),
            name,
            number,
        }
    }
});

export const addContactSuccess = createAction('form/addContactSuccess', (name, number) => {
    return {
        payload: {
            id: uuidv4(),
            name,
            number,
        }
    }
});

export const addContactError = createAction('form/addContactError', (name, number) => {
    return {
        // payload: {
        //     id: uuidv4(),
        //     name,
        //     number,
        // }
    }
});


// const delContact = createAction('contact/delContact');
export const delContactRequest = createAction('contact/delContactRequest');
export const delContactSuccess = createAction('contact/delContactSuccess');
export const delContactError = createAction('contact/delContactError');

export const filter = createAction('contact/filterContacts');

// export default {
//     initContactsRequest,
//     initContactsSuccess,
//     initContactsError,
//     addContactRequest,
//     addContactSuccess,
//     addContactError,
//     delContactRequest,
//     delContactSuccess,
//     delContactError,
//     filter
// };
