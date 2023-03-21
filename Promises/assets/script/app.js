fetch("https://thronesapi.com/api/v2/Characters")
.then((response)=> response.json)
.then((data)=> console.log(data));