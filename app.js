let url = (fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
.then(res=> res.json())
.then(data=> console.log(data))
)

const weatherBtn = document.getElementById('get-weather-btn');

weatherBtn.addEventListener('click', ()=>{displayPara.textContent = url
})

let displayPara = document.getElementById('weather-details-para')