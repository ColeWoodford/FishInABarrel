export const getAllUsers = () => {
	const users = fetch('/api/users', {
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

	return users;
}

export const destroyUser = (username) => {
	const destroyedUser = fetch(`/api/users/${username}`, {
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

	return destroyedUser;
}