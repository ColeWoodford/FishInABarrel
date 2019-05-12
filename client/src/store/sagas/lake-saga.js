import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '../actions/lake-actions';
import { getLake, postLake, catchAssignedFish, releaseAssignedFish } from '../api/lake-api';
import { createFish } from '../api/fish-api';
import { trout, allFish } from '../assets/fish';
import { getInventory } from '../api/inventory-api';

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
	const { user, lake } = action.payload;
	let txt = "";
	let caughtFish
	try{
		if(window.confirm("Catch the fish?")) {
			const inventory = yield call(getInventory, user);
			const catchPayload = {
				inventoryId: inventory.id,
				fishId: action.payload.fish
			}
			caughtFish = yield call(catchAssignedFish, catchPayload);
			txt = "You caught the fish!";
			yield put ({type: actions.CATCH_FISH_SUCCESS, payload: {fish: caughtFish, msg: txt}})
		} else {
			const releasePayload = {
				lakeId: lake,
				fishId: action.payload.fish
			}
			caughtFish = yield call(releaseAssignedFish, releasePayload);
			txt = "You released the fish!";
			const duplicateFish = allFish.filter(fish => fish.level == caughtFish.level);
			duplicateFish[0].id = lake;
			const levelUpFish = allFish.filter(fish => fish.level == (parseInt(caughtFish.level) + 1));
			yield call(createFish, duplicateFish[0]);
			if (levelUpFish.length > 0) {
				levelUpFish[0].id = lake;
				yield call(createFish, levelUpFish[0]);
			}
			yield put ({type: actions.RELEASE_FISH_SUCCESS, payload: {fish: caughtFish, msg: txt}})
		}
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