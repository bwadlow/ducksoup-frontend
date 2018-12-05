import React, { Component } from 'react'
import './App.css';
import BoardPage from './components/BoardPage'
import Login from './components/Login'
import Header from './components/Header'


class App extends Component {

  state={
    loggedIn:false
  }

  changeLoggedIn = () => (
    this.setState({loggedIn:!this.state.loggedIn})
  )

  render() {

    let displayMain;

    if (this.state.loggedIn) {
      displayMain = <div>
      <Header/><BoardPage/>
      </div>
    } else {
      displayMain = <Login changeLoggedIn={this.changeLoggedIn}/>
    }

    return (
      <div className='app'>

        {displayMain}
      </div>
    );
  }
}

export default App;
