import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import SubmitButton from '../Button/SubmitButton';
import queryString from 'query-string';



const particlesOptions = {
 
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
}
class App extends Component{
	constructor(){
		super();
		this.state ={
			serverData: {},
		}
	}
	componentDidMount(){
		let parsed = queryString.parse(window.location.search);
		let accessToken = parsed.access_token;
		console.log(parsed);
	}
	render(){
		return(
			<div className ="App">
			<h1> Moodify </h1>
			<Particles className = "particles"
				params = {particlesOptions}/>
			<SubmitButton />
			</div>

			);
	}
}

export default App;
