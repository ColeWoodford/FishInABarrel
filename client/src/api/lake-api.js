export const getLake = () => {
	fetch('http://localhost:8000/lakes')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(JSON.stringify(myJson));
	});
}