import queryString from 'query-string';
const Spotify ={


	getAccessToken(){
	let parsed = queryString.parse(window.location.hash);
	let accessToken = parsed.access_token;
		if (accessToken) {
			return accessToken;
		}
	},

	search(){
		const accessToken = Spotify.getAccessToken();
		var url = "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&min_energy=0.4&min_popularity=50&market=US&limit=8";
		const headers = {
			Authorization: `Bearer ${accessToken}`
		};
	    //var bearer = 'Bearer '+ this.accessToken;
	   return fetch(url,
	     { headers: headers }

	     /*headers: new Headers({
	     	'Authorization': 'Bearer ' + accessToken*/
	    ).then(response => {
	    	if(response.ok){
	    		return response.json();
	    	}
	    throw new Error('Request failed');
	    })
	    .then(jsonResponse => {
	    	if(!jsonResponse.tracks){
	    		return [];
	    	}
	    	return jsonResponse.tracks.map((track) =>({
	    			id: track.id,
					name: track.name,
					artist: track.artists[0].name,
					album: track.album.name,
					uri: track.uri
				
	    	})

	    )
	    })

	},
}


export default Spotify;