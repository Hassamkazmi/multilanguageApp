import axios from 'axios';

const {createAsyncThunk,createSlice} = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
IDLE:'idle',
LOADING:'loading',
ERROR:'error'
})

const ambulanceSlice = createSlice({
    name:'ambulance',
    initialState:{
        data:[],
        status:STATUSES.IDLE
    },

    extraReducers : (builder) => {
        builder
        .addCase(fetchAmbulance.pending, (state,action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchAmbulance.fulfilled , (state,action) => {
            state.data = action.payload
            state.status = STATUSES.IDLE
        })
        .addCase(fetchAmbulance.rejected , (state ,action) => {
            state.status = STATUSES.ERROR
        })
    }
})

export const {setAmbulance ,setStatus} = ambulanceSlice.actions;
export default ambulanceSlice.reducer;

export const fetchAmbulance = createAsyncThunk('fetch/ambulance', async () => {
    const response = await axios.get('/api/v1/AirAmbulance');
    const data = response.data;
    return data
})