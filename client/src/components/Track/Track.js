import React from 'react';
import './Track.css'
import Iframe from 'react-iframe'

const Track = (props) =>{
	return(
		<div className = 'card text-center '>
		<div className = 'overflow'>
		</div>
		<img src = { props.image } style={{ height: 200 }}
			className ="card-img-top"/>


		<div className = "card-body text-dark" id = { props.id }>
			<h4 className = "card-title"> Track: { props.name } </h4>
			<p className = "card-text text-secondary">Artist: { props.artist }</p>
			<Iframe url="https://open.spotify.com/embed/track/6A9mKXlFRPMPem6ygQSt7z"
					width="300"
					height="100"
					frameborder="0"
					allowtransparency="true" 
					allow="encrypted-media"/>
		</div>
		
    </div>
    );
}
export default Track;