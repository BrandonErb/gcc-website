import React from 'react'
import emblem from './images/GCC_Emblem.png'
import 'bootstrap/scss/bootstrap.scss'
import './index.css'

class Banner extends React.Component{
  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex flex-wrap justify-content-center bg-banner">
          <img src={emblem} className="img-logo p-1 mr-lg-8" alt="Emblem"/>
          <h1 className="header-title align-self-center">Galactic Commerce Corporation</h1>
        </div>
      </div>
    );
  }
}

export default Banner
