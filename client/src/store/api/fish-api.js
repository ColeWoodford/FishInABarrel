export const getFish = (lake) => {
	const fish = fetch(`/api/fishes/${lake.id}`, {
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

	return fish;
}

export const createFish = (fish = {}) => {
	return fetch(`/api/fishes/${fish.id}`, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(fish),
	})
		.then(response => response.json());
}