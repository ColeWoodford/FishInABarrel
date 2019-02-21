export const login = (credentials) => {
	const user = fetch(`/api/users/${credentials.username}/${credentials.password}`, {
	// const user = fetch('/api/user', {
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

	return user;
}

export const createUser = (credentials = {}) => {
	return fetch(`/api/users/${credentials.username}/lake/${credentials.lakeId}`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials),
	})
		.then(response => response.json());
}
