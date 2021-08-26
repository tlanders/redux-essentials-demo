import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: "Jim Bob"},
    {id: '1', name: "Mary Smith"},
    {id: '2', name: "Patrick Mahomes"},
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});

export default usersSlice.reducer;