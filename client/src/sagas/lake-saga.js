import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions/lake-actions';
import { getLake } from '../api/lake-api';

function* getLakes(action) {
	try {
		const lakes = yield call(getLake, action.payload);
		yield put({type: actions.GET_LAKES_SUCCESS, payload: lakes});
	} catch (e) {
		yield put({type: actions.GET_LAKES_FAILURE, message: e.message});
	}
}

function* mySaga() {
	yield takeLatest(actions.GET_LAKES, getLakes);
}

export default mySaga;