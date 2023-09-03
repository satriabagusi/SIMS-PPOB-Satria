import toolkit from '@reduxjs/toolkit';

const { configureStore, createAction, createReducer } = toolkit;


const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
})

const store = configureStore({
    reducer: {
        login: loginReducer
    }
})

store.dispatch(login());