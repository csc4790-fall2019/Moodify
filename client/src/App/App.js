import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
//import SubmitButton from '../Button/SubmitButton';
import queryString from 'query-string';
import Spotify from 'spotify-web-api-js';
import InputForm from '../components/InputForm/InputForm';
import Cards from '../components/Card/Cards';

const SpotifyWebApi = new Spotify();



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
		let parsed = queryString.parse(window.location.hash);
		let accessToken = parsed.access_token;
		this.state ={
			loggedIn: accessToken ? true : false,
			mood: '',
			resolution:'',
			genre: ''
		}
		if(accessToken){
			SpotifyWebApi.setAccessToken(accessToken)
			console.log(accessToken);
		}
		}

	onMoodSelect = (event) => {
		this.setState({mood: event.target.value})
		console.log(event.target.value);
	};
	onResolutionSelect = (event) =>{
		this.setState({resolution: event.target.value})
		console.log(event.target.value);
	};
	onGenreSelect = (event) => {
		this.setState({genre: event.target.value})
		console.log(event.target.value);
	};

	onButtonSubmit = () =>{
		var parsed = queryString.parse(window.location.hash);
		var accessToken = parsed.access_token;
		console.log(accessToken);

		var url = "https://api.spotify.com/v1/recommendations/";
	    var bearer = 'Bearer '+ accessToken;
	    fetch(url,
	    { method: 'GET',
	     headers: new Headers({
	     	'Authorization': 'Bearer ' + accessToken,
	     	'Content-Type': 'application/json',
			'Accept': 'application/json'

  		  
  		})
	    }).then(function(data) {
    			console.log("The playlist contains these tracks", data.json());
  			}, function(err) {
   				 console.error(err);
  			})
  	}//end on onsubmit


	
		/*if(accessToken){
			SpotifyWebApi.setAccessToken(accessToken)
			console.log("true");
		}*/

		/*fetch('https://api.spotify.com/v1/recommendations',{
			method: 'get',
				headers: {
				'Authorization': 'Bearer ' + accessToken,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			seed_genres: 'afrobeat'

		})
			 .then(function(data) {
    			console.log("The playlist contains these tracks", data.json());
  			}, function(err) {
   				 console.error(err);
  			});*/
		/*var options = {
			url: 'https://api.spotify.com/v1/recommendations',
			headers: {
				'Authorization': 'Bearer' + accessToken,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
		
			//json: true
		};*/
	
		
		/*fetch('https://api.spotify.com/v1/recommendations',
			{
				method: "get",
				headers: {
				'Authorization': 'Bearer' + accessToken
				},
			})
			 .then(function(data){
    			console.log("The playlist contains these tracks", data.body);
  			}, function(err) {
   				 console.error(err);
  			});*/





		
		/*SpotifyWebApi.getRecommendations({limit:8, min_energy: 0.4, seed_genres: ['country'], min_popularity:50, 'Authorization': 'Bearer ' + accessToken,})
		 .then(
    		function(data) {
     	     console.log('The playlist contains these tracks', data.body);
   		 },
    	function(err) {
     	 console.log('Something went wrong!', err);
    	}
  		);*/
  		//this.getRecommendations();
	
	/*getRecommendations(){
		var options = {
			headers: {
				'Authorization': 'Bearer' + this.accessToken,
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			seed_genres: 'afrobeat',
			limit: 8,
			json: true
		};
		fetch('https://api.spotify.com/v1/recommendations',{options})
			 .then(function(data) {
    			console.log("The playlist contains these tracks", data.body);
  			}, function(err) {
   				 console.error(err);
  			});
	}*/
	

	
	

	render(){
		return(
			<div className ="App">
			<h1> Moodify </h1>
			  <Particles className ='particles'
                params={ particlesOptions } />
			<InputForm 
			onMoodSelect = {this.onMoodSelect}
			onResolutionSelect = {this.onResolutionSelect}
			onGenreSelect = {this.onGenreSelect}
			onButtonSubmit ={this.onButtonSubmit}
			  />
			}
			}
			<Cards />
			</div>
			);
	}

};
export default App;
