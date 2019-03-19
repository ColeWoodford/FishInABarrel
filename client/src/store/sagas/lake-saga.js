import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions/lake-actions';
import { getLake, postLake } from '../api/lake-api';
import { createFish } from '../api/fish-api';
import { trout } from '../assets/fish';

function* getLakes(action) {
	try {
		const lakes = yield call(getLake, action.payload);
		yield put({type: actions.GET_LAKES_SUCCESS, payload: lakes});
	} catch (e) {
		yield put({type: actions.GET_LAKES_FAILURE, payload: e.message});
	}
}

function* newLake(action) {
	try {
		const newLakePayload = {
			lake_name: action.payload,
		}
		const newLake = yield call(postLake, newLakePayload);
		const startingFish = trout;
		startingFish.id = newLake.id;
		for (let i = 0; i < 30; i++) {
			yield call(createFish, startingFish);
		}
		yield put({type: actions.NEW_LAKE_SUCCESS, payload: newLake});
	} catch (e) {
		yield put({type: actions.NEW_LAKE_FAILURE, payload: e.message});
	}
}

function* catchFish(action) {
	try{
		
		yield put ({type: actions.CATCH_FISH_SUCCESS, payload: action.payload})
	} catch (e) {
		yield put({type: actions.CATCH_FISH_FAILURE, payload: e.message});
	}
}

function* lakeSaga() {
	yield takeLatest(actions.GET_LAKES, getLakes);
	yield takeLatest(actions.NEW_LAKE, newLake);
	yield takeLatest(actions.CATCH_FISH, catchFish);
}

export default lakeSaga;