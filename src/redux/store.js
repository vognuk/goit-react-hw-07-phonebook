import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
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

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    loading,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
