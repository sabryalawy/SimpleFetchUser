import { applyMiddleware, createStore } from "redux";
import userReducer  from "./reducers/userReducer";
import createSagaMiddleware from 'redux-saga'
import { sagaListener } from "./sagas/users";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(userReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaListener);

export default store;