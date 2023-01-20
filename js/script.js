function user_api() {
	let input_param = document.getElementById("UserID").value
	let input_url = ("https://aaexprc570.execute-api.us-east-1.amazonaws.com/getsecrets?dbuser="+input_param)
	alert(input_url)
	fetch(input_url,{headers:{'Content-Type':'application/json'},mode:'cors'})
	.then(res => res.json())
	.then(posts => console.log(posts))
 

}
