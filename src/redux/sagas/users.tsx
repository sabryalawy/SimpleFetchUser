import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { addUser, getUsers } from '../actions/user';
import { GetUsers } from '../constants/user'


function* getusersAsync() {
    var data:any[]=[];
    yield fetch("https://jsonplaceholder.typicode.com/users/").then(rez=>rez.json()).then(rezz=>data=rezz)
    yield put(addUser(data));
}

export function* sagaListener() {
    yield takeLatest(GetUsers, getusersAsync); 
}