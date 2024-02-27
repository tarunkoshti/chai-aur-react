import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Reducers/authSlice';

const store = configureStore({
    reducer: {
        authReducer
        //TODO postReducer
    }
})

export default store;