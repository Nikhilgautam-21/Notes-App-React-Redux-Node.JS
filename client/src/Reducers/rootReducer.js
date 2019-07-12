import { combineReducers } from 'redux';
import todoReducer from "./todoReducer";

const reducers={

    todoReducers: todoReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;