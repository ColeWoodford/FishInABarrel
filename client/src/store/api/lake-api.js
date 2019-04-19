export const getLake = () => {
	const lake = fetch('/api/lakes', {
		method: 'GET',
		headers: {
			"Accept": "application/json",
		}
	})
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		return myJson;
	});

	return lake;
}

export const postLake = (data = {}) => {
	return fetch('/api/lakes', {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
	})
		.then(response => response.json());
}

export const catchAssignedFish = (catchPayload = {inventoryId: 0, fishId: 0}) => {
	return fetch(`/api/fishes/inventory/${catchPayload.inventoryId}/catchfish/${catchPayload.fishId}`, {
		method: "PATCH",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(function(myJson) {
			return myJson;
		});
}

export const releaseAssignedFish = (catchPayload = {lakeId: 0, fishId: 0}) => {
	return fetch(`/api/fishes/lake/${catchPayload.lakeId}/releasefish/${catchPayload.fishId}`, {
		method: "PATCH",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(function(myJson) {
			return myJson;
		});
}
