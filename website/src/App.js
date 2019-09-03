import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import emblem from './images/GCC_Emblem.png'
import Main from './Main'
import About from './About'
import Catalogue from './Catalogue'

function App() {
  return (
    <Router>
      <div className="App bgc">
        <nav className="site-header sticky-top mx-auto">
          <div className="container d-flex flex-column flex-md-row justify-content-around">
            <Link className="py-2" to="/">Home</Link>
            <Link className="py-2" to="/about/">About</Link>
            <Link className="py-2" to="/catalogue/">Catalogue</Link>
          </div>
        </nav>
        <Route path="/" exact component={Main} />
        <Route path="/about/" exact component={About} />
        <Route path="/catalogue/" exact component={Catalogue} />
        <footer className="container py-5 bgc">
          <div className="row">
            <div className="col-6">
              <img src={emblem} className="footer-logo" alt="Emblem"/>
              <small className="d-block mb-3 text-muted">© 2019</small>
            </div>
            <div className="col-6">
              <h5 className="text-muted">Contact</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">service@galacticcommercecorportation.com</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App
