import React from 'react';

class Name extends React.Component{

	constructor(props){
		super(props)
		this.onBtnClick = this.onBtnClick.bind(this)
	}

	onBtnClick(event){
		return this.props.setName(event.target.textContent)
	}

	render(){
		return(
			<div>
				<button onClick={this.onBtnClick}>Adam</button>
				<button onClick={this.onBtnClick}>Sultan</button>
				<button onClick={this.onBtnClick}>Azat</button>
				<p>Your name is - {this.props.name}</p>
			</div>
		)
	}
}

export default Name 