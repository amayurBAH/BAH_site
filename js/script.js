// function revealMessage() {
// 	document.getElementById("hiddenMessage").style.display = 'block';

// }

// function revealMessage1() {
// 	document.getElementById("hidden1").style.display = 'block';
	
// }

// // const input = prompt("What is your username?")
// // alert(`Your name is ${input}`);




function returnSecret() {

	let input = document.getElementById("UserID").value
	alert("https://aaexprc570.execute-api.us-east-1.amazonaws.com/getsecrets?dbuser="+input)
	let endpointURL = ("https://aaexprc570.execute-api.us-east-1.amazonaws.com/getsecrets?dbuser="+input)

}








function user_api() {
	let input_param = document.getElementById("UserID").value
	let input_url = ("https://aaexprc570.execute-api.us-east-1.amazonaws.com/getsecrets?dbuser="+input_param)
	alert(input_url)
	fetch(input_url,{headers:{'Content-Type':'application/json'},mode:'cors'})
	.then(res => res.json())
	.then(posts => console.log(posts))
 

}

// class UserApiClass {
// 	constructor(http) {
// 		this.http = http;
// 	}
// }


// function user_api() {
// 	let input_param = document.getElementById("UserID").value
// 	let input_url = ("https://aaexprc570.execute-api.us-east-1.amazonaws.com/getsecrets?dbuser="+input_param)

// 	const api_call = http.get(input_url, function(api_res){
// 		let body_chunks = [];
// 		api_res.on('data', function(chunk) {
// 			body_chunks.push(chunks);
// 		});
// 		api_res.on('end', function() {
// 			let body = Buffer.concat(body_chunks);
// 			body = JSON.parse(body);

// 			if('error' in body)
// 				console.log(body.error)
// 			else
// 				console.log(body);
// 		});
// 	}); 

// 	api_call.on('error', function(e) {
// 		console.log(e.message);
// 	})

// 	}














// let val = user_api()
// let api_url = ("https://aaexprc570.execute-api.us-east-1.amazonaws.com/getsecrets?dbuser="+val)
// alert(api_url)
	
// async function getapi(api_url){

// 	const response = await fetch(api_url);
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	} show(data);

// }

// getapi(api_url)

// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }


