import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {Employreducer} from "./Redux/Employ/reducer";
import {reducer} from "./Redux/Admin/reducer";


const rootReducer = combineReducers({
    admin: reducer,
    employ: Employreducer
});


const thunkMiddleware = (store) =>(next) =>(action) => {
    return typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
};

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);
