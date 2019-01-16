export const getLake = () => {
	const lake = fetch('/api/lakes')
	// const lake = fetch('http://localhost:8000/api/lakes')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		return myJson;
	});

	return lake;
}