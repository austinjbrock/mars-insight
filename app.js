console.log(fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
.then(res=> res.json())
.then(data=> console.log(data))
)


