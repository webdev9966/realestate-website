import React from 'react'
import Home from '../home/Home'
import About from '../about/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Services from '../services/Services'
import Blog from '../blog/Blog'
import Pricing from '../pricing/Pricing'
import Register from '../login/Register'
import homepage from '../login/Homepage'
import Forgetpassword from '../login/Forgetpassword'
import Login from '../login/Login'
import Contact from '../contact/Contact'
const Pages = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path = "/login" component={Login} />
          <Route path="/register" component={ Register } />
          <Route path="/forget-password" component={ Forgetpassword } />
          <Route path="/homepage" component={ homepage } />
        </Switch>
      </Router>
    </>)
}

export default Pages