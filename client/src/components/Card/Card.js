import React from 'react';
import './Card.css'

const Card = () =>{
	return(
		<div className = 'card text-center'>
		<div className = 'overflow'>
		</div>
			<img src = "data:image/jpeg;base64,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"
			className ="card-img-top"/>


		<div className = "card-body text-dark">
			<h4 className = "card-title"> Card Title </h4>
			<p className = "card-text text-secondary">xyz</p>
			<a href = "#" className = "btn btn-outline-success"> Gi</a>
		</div>
		
    </div>
    );
}
export default Card;