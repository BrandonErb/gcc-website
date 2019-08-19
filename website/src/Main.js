import React from 'react'
import emblem from './images/GCC_Emblem.png'
import backgroundVideo from './video/background_video.mp4'

class Main extends React.Component{
  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden text-center bgc">
          <div className="bg container-fluid">
            <div className="row">
              <div className="col-md-3 py-1 d-flex justify-content-end align-items-center">
                <a>
                  <img src={emblem} className="img-logo" alt="Emblem"/>
                </a>
              </div>
              <div className="col-md d-flex justify-content-start align-items-center">
                <h1 className="header-title">Galactic Commerce Corporation</h1>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center container">
            <video className="embed-responsive embed-responsive-16by9 video" autoPlay muted loop>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="d-flex overlay">
              <h1 className="display-2 font-weight-normal text-white text-outline">Welcome to the GCC</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main
