const url = 'https://twitter154.p.rapidapi.com/user/details?username=elonmusk&user_id=44196397';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '365d5fa51fmshe8349256ae1bd96p1f5f27jsne0bb6ac58e87',
		'x-rapidapi-host': 'twitter154.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
