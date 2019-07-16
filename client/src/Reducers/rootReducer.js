import { combineReducers } from 'redux';
import todoReducer from "./todoReducer";

const reducers={

    todoReducer: todoReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;