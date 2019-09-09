import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './stylesheets/open-iconic-bootstrap.css'
import 'bootstrap/scss/bootstrap.scss'
import './stylesheets/custom.css'
import './App.css'
import './index.css'
import emblem from './images/GCC_Emblem.png'
import Main from './Main'
import About from './About'
import Catalogue from './Catalogue'
import ScrollToTop from './ScrollToTop'
//include react.js solution for bootstrap navbar collape from Evan Siroky on https://stackoverflow.com/questions/39588816/navbar-from-bootstrap-to-reactjs

class App extends React.Component {
  state = {
    navCollapsed: true
  }

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }

  render () {
    const {navCollapsed} = this.state
    return (
      <Router>
        <div className="App bgc app-div">
          <div className="container-fluid sticky-top p-0">
            <nav className="site-header navbar navbar-expand-sm" >
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar" onClick={this._onToggleNav}>
                  <span className="oi oi-menu menu-button"></span>
                </button>
                <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'} id="navbar">
                  <div className="w-100">
                    <ul className="navbar-nav d-flex justify-content-around flex-fill">
                      <li className="nav-item">
                        <Link className="py-1 nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="py-1 nav-link" to="/about/">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="py-1 nav-link" to="/catalogue/">Catalogue</Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
          </div>
          <ScrollToTop>
            <Route path="/" exact component={Main} />
            <Route path="/about/" exact component={About} />
            <Route path="/catalogue/" exact component={Catalogue} />
          </ScrollToTop>
          <footer className="container py-5 bgc">
            <div className="row">
              <div className="col-6">
                <img src={emblem} className="footer-logo" alt="Emblem"/>
                <small className="d-block mb-3 text-muted">© 2019</small>
              </div>
              <div className="col-6">
                <h5 className="text-muted">Contact</h5>
                <ul className="list-unstyled text-small text-truncate">
                  <li><a className="text-muted">service@galacticcommercecorportation.com</a></li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );}
}

export default App
