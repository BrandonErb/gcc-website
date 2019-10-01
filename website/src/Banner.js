import React from 'react'
import emblem from './images/GCC_Emblem.png'
import './index.css'

class Banner extends React.Component{
  render() {
    return (
      <div className="container-fluid bg-banner">
        <div className="d-flex flex-wrap justify-content-center">
          <img src={emblem} className="img-logo p-1 mr-lg-6 mr-md-4" alt="Emblem"/>
          <h1 className="header-title align-self-center display-2 font-weight-normal text-responsive">Galactic Commerce Corporation</h1>
        </div>
      </div>
    );
  }
}

export default Banner
