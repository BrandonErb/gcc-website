import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Main from './Main'

function App() {
  return (
    <div className="App bgc">
      <nav className="site-header sticky-top mx-auto">
        <div className="container d-flex flex-column flex-md-row justify-content-around">
          <a className="py-2 d-none d-md-inline-block" href="#">Home</a>
          <a className="py-2 d-none d-md-inline-block" href="#">About</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Catalogue</a>
        </div>
      </nav>
      <Main/>
      <footer className="container py-5 bgc">
        <div className="row">
          <div className="col-6 col-md">
            <small className="d-block mb-3 text-muted">© 2019</small>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-muted">Contact</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">service@galacticcommercecorportation.com</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
