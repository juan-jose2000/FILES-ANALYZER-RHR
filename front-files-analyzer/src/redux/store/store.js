import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {fileReducer} from '../reducers/fileReducer';
import userListReducer from '../reducers/userListReducer';
import userReducer from '../reducers/userReducer';


const reducers = combineReducers({
    auth: userReducer,
    user: userListReducer,
    file: fileReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware( thunk ))
);
