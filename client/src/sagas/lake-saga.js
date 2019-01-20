import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions/lake-actions';
import { getLake, postLake } from '../api/lake-api';

function* getLakes(action) {
	try {
		const lakes = yield call(getLake, action.payload);
		yield put({type: actions.GET_LAKES_SUCCESS, payload: lakes});
	} catch (e) {
		yield put({type: actions.GET_LAKES_FAILURE, message: e.message});
	}
}

function* newLake(action) {
	try {
		const newLakePayload = {
			lake_name: action.payload,
		}
		const newLake = yield call(postLake, newLakePayload);
		yield put({type: actions.NEW_LAKE_SUCCESS, payload: newLake});
	} catch (e) {
		yield put({type: actions.NEW_LAKE_FAILURE, message: e.message});
	}
}

function* mySaga() {
	yield takeLatest(actions.GET_LAKES, getLakes);
	yield takeLatest(actions.NEW_LAKE, newLake);
}

export default mySaga;