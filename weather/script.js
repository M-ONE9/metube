const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '817a55a639mshf5187ec67d5f2fbp18c63djsn5011e5817ef2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));