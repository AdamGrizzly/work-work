import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Name from './components/Name';
import User from './components/User'


class App extends React.Component{
  render(){
    return (
        <div className="App">
          <User/>
          <Name/>
        </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.userInfo.user,
    number: state.userInfo.number,
  }
}


export default connect(mapStateToProps)(App);
