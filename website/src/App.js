import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Main from './Main'

function App() {
  return (
    <div className="App">
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-around">
          <a className="py-2 d-none d-md-inline-block" href="#">Home</a>
          <a className="py-2 d-none d-md-inline-block" href="#">About</a>
          <a className="py-2 d-none d-md-inline-block" href="#">Catalogue</a>
        </div>
      </nav>
      <Main/>
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx={12} cy={12} r={10} /><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" /></svg>
            <small className="d-block mb-3 text-muted">© 2019</small>
          </div>
          <div className="col-6 col-md">
            <h5>Contact</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Email</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
