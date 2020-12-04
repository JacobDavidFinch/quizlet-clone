import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const userInfo = localStorage.getItem('userInfo');
const expiresAt = localStorage.getItem('expiresAt');

// const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userInfo');
//     localStorage.removeItem('expiresAt');
//     setAuthState({});
// TODO: Move this to main page: history.push('/login');
// };

const initialState = {
    token,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
    isAdmin: userInfo?.role === 'admin',
    isAuthenticated: !token || !expiresAt ? false : new Date().getTime() / 1000 < expiresAt,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signup(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        login(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
        logout(state, action) {
            return {};
        },
    },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
