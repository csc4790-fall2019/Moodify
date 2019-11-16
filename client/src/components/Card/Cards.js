import React, {Component} from 'react';
import Card from './Card';
import './Card.css'


class Cards extends Component{
	render(){
		return(
			<div className = "container-fluid">
				<div className = 'row'>
					<div className = "col-md-4">
					 	<Card />
					 </div>
					<div className = "col-md-4">
						<Card />
					</div>
					<div className = "col-md-4">
						<Card />
					</div>
				</div>

				<div className = 'row'>
					<div className = "col-md-4">
					 	<Card />
					 </div>
					<div className = "col-md-4">
						<Card />
					</div>
					<div className = "col-md-4">
						<Card />
					</div>
				</div>

			</div>


		
			)

	}
}
export default Cards;

