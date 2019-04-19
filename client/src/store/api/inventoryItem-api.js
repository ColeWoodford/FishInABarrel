export const getInventoryItems = (invId) => {
	const inventoryItems = fetch(`/api/inventoryitems/${invId}`, {
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

	return inventoryItems;
}

export const getFishItems = (invId) => {
	const inventoryItems = fetch(`/api/fishitems/${invId}`, {
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

	return inventoryItems;
}
export const createInventoryItem = (item = {}) => {
	return fetch(`/api/inventoryitems/${item.id}`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"inventoryId": item.id,
			"name": item.name,
      "level": item.level,
      "value": item.value,
      "category": item.category,
      "type": item.type,
      "bgcolor": item.bgcolor
		}),
	})
	.then(response => response.json());
}

export const destroyInventoryItem = (id) => {
	const destroyedInventoryItem = fetch(`/api/inventoryitems/${id}`, {
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

	return destroyedInventoryItem;
}