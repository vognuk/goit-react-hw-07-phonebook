import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import contactsReducer from './contactsReducer'
import loading from './contactsReducer'
import logger from 'redux-logger'

import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

// console.log(process.env.NODE_ENV);
// console.log(getDefaultMiddleware);

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ],
        },
    }),
    logger
];

// console.log(loading);

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    loading,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
