import React from "react";
import './App.css';

const inputKeyword = document.querySelector('.input-keyword');
class App extends React.Component {
  
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value +"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metc")
			.then((res) => res.json())
      .then(response => {
        let result = document.querySelector('.result')
        result.innerHTML = `<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                            <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                            <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                            <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                            <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                            <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>` 
      })
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
      inputKeyword.value = null;
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Fetch data from an api in react </h1> {
				items.map((item) => (
				<ol key = { item } >
					User_Name: { item },
					Full_Name: { item },
					User_Email: { item }
					</ol>
				))
			}
		</div>
	);
}
}

export default App;
