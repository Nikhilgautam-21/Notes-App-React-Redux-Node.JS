import {put, takeLatest, call, all} from 'redux-saga/effects';
import axios from 'axios';
import {ADD_TODO, GET_TODO, ADD_TODO_SUCCESS,GET_TODO_SUCCESS, DELETE_TODO_SUCCESS,DELETE_TODO,UPDATE_TODO,UPDATE_TODO_SUCCESS, UPDATE_STATUS_TODO} from '../Actions/actionTypes';

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
        console.log(e)
    }
}

export function* deleteTodoSaga(action){
    try{
        const response = yield call(axios.delete,(`${BaseUrl}/delete/${action.payload}`))
        yield put({type:DELETE_TODO_SUCCESS, payload:response.data})
    }
    catch(e){
        console.log(e)
    }
}

export function* updateTodoSaga(action){
    try{
        const response = yield call(axios.put,(`${BaseUrl}/update/${action.payload.id}`),action.payload.todo)
        yield put({type:UPDATE_TODO_SUCCESS, payload:response.data})   
    }
    catch(e){
        console.log(e)
    }
}

export function* updateStatusTodoSaga(action){
    try{
        const response = yield call(axios.put,(`${BaseUrl}/update/${action.payload.id}`),action.payload)
        yield put({type:UPDATE_TODO_SUCCESS, payload: response.data})
    }
    catch(e){
        console.log(e)
    }
}

export function* watchAll(){
    yield all([
        takeLatest(GET_TODO,getTodoSaga),
        takeLatest(DELETE_TODO,deleteTodoSaga),
        takeLatest(ADD_TODO,addTodoSaga),
        takeLatest(UPDATE_TODO,updateTodoSaga),
        takeLatest(UPDATE_STATUS_TODO,updateStatusTodoSaga)
    ]);
}       