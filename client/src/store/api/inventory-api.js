export const getInventory = (userId) => {
	const inventory = fetch(`/api/inventories/${userId}`, {
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

	return inventory;
}

export const createInventory = (user = {}) => {
	return fetch(`/api/inventories/${user.id}`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"userId": user.id,
			"size": "10",
			"money": "100"
		}),
	})
	.then(response => response.json());
}

export const addMoney = (payload={invId: 0, value: 0}) => {
	return fetch(`/api/inventory/${payload.invId}/addmoney/${payload.value}`, {
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

export const destroyInventory = (userId) => {
	const destroyedInventory = fetch(`/api/inventories/${userId}`, {
		method: 'DELETE',
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

	return destroyedInventory;
}