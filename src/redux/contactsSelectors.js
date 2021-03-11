import { createSelector } from '@reduxjs/toolkit'

export const getAllContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.loading;
export const getFilter = state => state.contacts.filter;


export const getFilteredContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = String(filter).toLowerCase();
        return contacts.filter(({ name }) => String(name).toLowerCase().includes(normalizedFilter)
        );
    },
);

// export const selectors = {
//     getAllContacts,
//     getFilter,
//     getLoading,
//     getFilteredContacts,
// };

// export default selectors;
