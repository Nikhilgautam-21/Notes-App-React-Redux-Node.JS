import {ADD_TODO,GET_TODO} from './actionTypes'

export const getToDo =() =>{
    return{
        type: GET_TODO
    }
}

export const addToDo = (todo) =>{
    return{
        type:ADD_TODO,
        payload: todo
    } 
}