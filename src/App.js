import React, { Component } from 'react'
import {Router, Route, browserHistory} from 'react-router'
import Home from './pages/home/home'
import Single from './pages/single/single'
import Multi from './pages/multi/multi'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import './styles/app.scss'

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/single' component={Single} />
        <Route path='/multi' component={Multi} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Router>
    )
  }
}

export default App
