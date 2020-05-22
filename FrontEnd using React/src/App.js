import React from 'react';
import './App.css';
import Form from './components/addForm'
import Home from './components/home'
import NotFound from './components/notfound'
import {Route ,BrowserRouter as Router , Switch} from 'react-router-dom'

//Setting up Routes for the app

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Router>
        	<Switch>
        		<Route exact path="/" component={Home}/>
        		<Route exact path="/add-info" component={Form}/>
        		<Route path="*" component={NotFound}/>
        	</Switch>
        </Router>
      </div>
      )
  }
}

export default App;
