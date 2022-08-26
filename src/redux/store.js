import {configureStore} from '@reduxjs/toolkit';
import serviceSlice from './serviceSlice';

const store = configureStore({
    reducer:{
        service: serviceSlice
    },
})

export default store;