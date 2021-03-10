import { createSelector } from '@reduxjs/toolkit'

// console.log(state);
export const getAllContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.loading;
export const getFilter = state => state.contacts.filter;


export const getFilteredContacts = createSelector([getAllContacts, getFilter], (contacts, filter) => {
    // const normalizedFilter = filter.toLowerCase();
    return;
},
);

// export const selectors = {
//     getAllContacts,
//     getFilter,
//     getLoading,
//     getFilteredContacts,
// };

// export default selectors;
