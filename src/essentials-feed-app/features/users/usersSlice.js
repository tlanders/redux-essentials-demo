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

export const selectAllUsers = state => state.users;
export const selectUserById = (state, userId) => state.users.find(user => user.id === userId);

export default usersSlice.reducer;