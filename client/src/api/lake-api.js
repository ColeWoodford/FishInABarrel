export const getLake = () => {
	const lake = fetch('/api/lakes', {
		method: 'GET',
		headers: {
			"Accept": "application/json",
		}
	})
	// const lake = fetch('http://localhost:8000/api/lakes')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		return myJson;
	});

	return lake;
}

export const postLake = (data = {}) => {
	// return fetch('http://localhost:8000/api/lakes', {
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