console.log(fetch('https://regres.in/api/users')
.then(res=> res.json())
.then(data=> console.log(data))
)


