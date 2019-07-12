import {all} from 'redux-saga/effects';
import {watchAll} from './todoSaga';


export default function* rootSaga(){
    yield all([
        watchAll()
    ])
}