import { put, takeLatest } from 'redux-saga/effects';
import { CLEANER_ACTIONS } from '../actions/cleanerActions';
import { fetchCleaners, postCleaner } from '../requests/cleanerRequests';

function* fetch(){
    try{
        const cleaners = yield fetchCleaners();
        yield put({type: CLEANER_ACTIONS.STORE, payload: cleaners});
    }catch(error){
        alert("Failed to fetch cleaners");
    }
}

function* post(action){
    try{
        yield postCleaner(action.payload);
        yield put({type: CLEANER_ACTIONS.FETCH});
    }catch(error){
        alert("Failed to post cleaner");
    }
}

function* cleanerSaga(){
    yield takeLatest(CLEANER_ACTIONS.FETCH, fetch);
    yield takeLatest(CLEANER_ACTIONS.POST, post);
}

export default cleanerSaga;