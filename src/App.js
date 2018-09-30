import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import Home from './common/pages/home'
import Detail from './common/pages/detail/loadable.js'
import Login from './common/pages/login/login'

import store from './store'

class App extends Component {
  render() {
    return (
    	<Provider store = {store}>
	      <div className="App">        
	        <BrowserRouter>
	        <div>
	        	<Header/>
	        	<Route path='/' exact component={ Home }></Route>
	        	<Route path='/login' exact component={ Login }></Route>
	        	<Route path='/detail/:id' exact component={ Detail }></Route>
	        </div>
	        </BrowserRouter>
	      </div>
      	</Provider>
    );
  }
}

export default App;
