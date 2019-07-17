import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const initialState = {};
// const middleware = [thunk];

// const sagaMiddleware = createSagaMiddleware();

// let devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;