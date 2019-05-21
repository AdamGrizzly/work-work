import React from "react";

class User extends React.Component{
	render(){
		return(
			<div>
	 			<h1>hello {this.props.user}</h1>
	          	<p>your number is: {this.props.number}</p>
	        </div>
		)
	}
} 
export default User