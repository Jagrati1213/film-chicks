import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};
const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        removeUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    }
});

export const { addUser, removeUser } = UserSlice.actions;
export const selectUserState = (state) => state.user;
export default UserSlice.reducer;