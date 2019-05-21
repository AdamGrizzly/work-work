import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Name from './components/Name';
import User from './components/User';
import setNameAction from './actions/actionName'


class App extends React.Component{
  render(){
    return (
        <div className="App">
          <User user={this.props.user} number={this.props.number}/>
          <Name name= {this.props.name} setName={this.props.setNameAction}/>
        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.userInfo.user,
    number: state.userInfo.number,
    name: state.userInfo.name
  }
}

function mapDispatchToProps(dispatch){
  return{
    setNameAction : name => {
      dispatch(setNameAction(name))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
