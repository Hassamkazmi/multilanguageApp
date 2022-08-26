import axios from 'axios'
const {createAsyncThunk, createSlice} = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE:"idle",
    LOADING:"loading",
    ERROR:"error"
})
const serviceSlice = createSlice({
    name:'service',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },

    extraReducers:(builder) => {
        builder
        .addCase(fetchService.pending,(state,action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchService.fulfilled,(state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchService.rejected,(state,action) => {
            state.status = STATUSES.ERROR
        })
    }
    
})

export const { setService , setStatus } = serviceSlice.actions;
export default serviceSlice.reducer;

export const fetchService = createAsyncThunk('service/fetch' , async () => {
    const response =  await axios.get('/api/v1/CardItems')
    const data = response.data;
    return data.data;
})