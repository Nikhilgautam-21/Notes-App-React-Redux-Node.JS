import {put, takeLatest, call, all} from 'redux-saga/effects';
import axios from 'axios';
import {ADD_TODO, GET_TODO, ADD_TODO_SUCCESS,GET_TODO_SUCCESS} from '../Actions/actionTypes';

const BaseUrl = "http://localhost:8002/api";

export function* getTodoSaga(){
    try{
        const response = yield call(axios.get, (`${BaseUrl}/todos`) )
        yield put({type:GET_TODO_SUCCESS,payload:response.data})
    }
    catch(e){
        console.log(e)
    }
}

export function* addTodoSaga(action){
    try{
        const response = yield call(axios.post, (`${BaseUrl}/addtodo`),action.payload )
        yield put({type:ADD_TODO_SUCCESS, payload:response.data})
    }
    catch(e){

    }
}

export function* watchAll(){
    yield all([
        takeLatest(GET_TODO,getTodoSaga),
        takeLatest(ADD_TODO,addTodoSaga)
    ]);
}