import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Spotify from '../util/Spotify/Spotify';
import InputForm from '../components/InputForm/InputForm';
import queryString from 'query-string';
import TrackList from '../components/TrackList/TrackList';
import 'tachyons';


let selected_genre;
let	valence;
let	danceability;
let tempo;
let accessToken;
let topArtistsIDs;

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
	constructor(props){
		super(props);
		this.state ={
			//loggedIn: accessToken ? true : false,
			mood: '',
			resolution:'',
			genre: '',
			danceability: '',
			"searchResults": [],
			"topArtistsIDs": []
			
		}
		}
	
	onMoodSelect = (event) => {
		this.setState({mood: event.target.value}, function () {
   		 console.log(this.state.mood);
	})
	};

	onResolutionSelect = (event) =>{
		this.setState({resolution: event.target.value},function () {
			let resolution = this.state.resolution;
			if(resolution === 'Even sadder'){
				valence = 0.1;
				danceability = 0.1;
			}

			else if(resolution === 'Dance'){
				valence = 0.9;
				danceability = 0.9;
			}
			else if(resolution == 'Mellow'){
				tempo = 60;
			}
    	
});
	};

	onGenreSelect = (event) => {
		this.setState({genre: event.target.value}, function () {
    	selected_genre = this.state.genre;
    	console.log(selected_genre);
});
};

getAccessToken(){
	let parsed = queryString.parse(window.location.hash);
	 accessToken = parsed.access_token;
	
	return accessToken;
}

	getTopArtists= async() =>{ 
			var url = "https://api.spotify.com/v1/me/top/artists?limit=50";
			var access_token = this.getAccessToken();
	    	const response = await fetch(url,
	    	{ method: 'GET',

	    	 headers: new Headers({
	     	'Authorization': 'Bearer ' + access_token
  		})
	    }).then(response => {
	   		if(response.ok){
	   			return response.json();
	   		}
	   		throw new Error('Request failed')
	    })
	    .then(jsonResponse =>{
	    	if(jsonResponse.total ==0){
	    		return [];
	    	}
	    	//console.log(this.state.topArtistsIDs);
	    	return jsonResponse.items.map((artist) =>({
	   			id: artist.id,
				// name: artist.name,	
				// genres: artist.genres
	     	}))
	    })
			return response;
	    }//end of get Top Artists
	   


	 search = async() =>{
		var access_token = this.getAccessToken();
		var firstArtist;
		var secondArtist;
		var thirdArtist;
		var forthArtist;
		var fifthArtist;
		var idArray =[];

		this.getTopArtists().then(results => {
		for(var i =0; i< 50; i++){
			  idArray.push(results[i].id);
			 this.setState({topArtistsIDs: idArray}); 
		}
		 
		});
		console.log(this.state.topArtistsIDs);
		firstArtist = this.state.topArtistsIDs[0];
		secondArtist = this.state.topArtistsIDs[1];
		thirdArtist = this.state.topArtistsIDs[2];
		forthArtist = this.state.topArtistsIDs[3];
		fifthArtist = this.state.topArtistsIDs[4];
		console.log(this.state.topArtistsIDs[0]);
		
			
	//target_valence=${ valence }&target_danceability=${ danceability }&seed_genre=${ selected_genre }
	var url = `https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&min_popularity=50&market=US&limit=8`;
	    var bearer = 'Bearer '+ access_token;
	    const response = await fetch(url,
	    { method: 'GET',

	     headers: new Headers({
	     	'Authorization': 'Bearer ' + accessToken
  		})
	    }).then(response => {
	    	if(response.ok){
	    		return response.json();
	    	}
	    throw new Error('Request failed');
	    })
	    .then(jsonResponse => {
	    	if(!jsonResponse.tracks){
	    		return [];
	    	}
	    	this.setState({ searchResults: jsonResponse.tracks});
	    	console.log(jsonResponse.tracks);
	     	return jsonResponse.tracks.map((track) =>({
	    		id: track.id,
				name: track.name,
				artist: track.artists[0].name,
				album: track.album.name,
				uri: track.uri,
				image: track.album.images[0].url
				
	     	}));
  	})
	    return response;	
  	};//end on search

 
onButtonSubmit = () =>{
		
  		this.search().then(results => {
      	this.setState({searchResults: results});
      	console.log(this.state.searchResults);
    });
  	} 

	render(){
		return(
			<div className ="App">
			<h1> Moodify </h1>
			  <Particles className ='particles'
                params={ particlesOptions } />
				<InputForm 
				
						//onMoodSelect = {this.onMoodSelect}
				onResolutionSelect = {this.onResolutionSelect}
				onGenreSelect = {this.onGenreSelect}
				onButtonSubmit ={this.onButtonSubmit} />
				<TrackList searchResults = { this.state.searchResults }/>

			
			</div>
			);
	}

};
export default App;
