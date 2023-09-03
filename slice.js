import toolkit from '@reduxjs/toolkit';

const {configureStore, createSlice} = toolkit;

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        status: false,
    },
    reducers: {
        login: (state, action) => {
            state.status = true;
        },
    },
});

const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
    },
});

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(loginSlice.actions.login());