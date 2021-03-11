import { createAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const initContactsRequest = createAction('app/initStateRequest');
export const initContactsSuccess = createAction('app/initStateSuccess');
export const initContactsError = createAction('app/initStateError');

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

export const delContactRequest = createAction('contact/delContactRequest');
export const delContactSuccess = createAction('contact/delContactSuccess');
export const delContactError = createAction('contact/delContactError');
export const filter = createAction('contact/filterContacts');
