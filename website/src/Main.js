import React from 'react'
import backgroundVideo from './video/video_hauler.mp4'
import './index.css'

class Main extends React.Component{
  render() {
    return (
      <div>
        <div className="main-title d-xl-none d-lg-none d-md-none d-sm-block d-xs-block py-2">
          <div className="row">
            <h1 className="col-lg-12 display-3 font-weight-normal text-white text-outline text-responsive">Welcome to the Galactic Commerce Corporation</h1>
          </div>
          <div className="row">
            <h1 className="col-lg-12 display-4 font-weight-normal text-white text-outline text-responsive">Serving Clients Across Euclid</h1>
          </div>
        </div>
        <div className="position-relative overflow-hidden bgc px-3">
          <div className="d-flex justify-content-center align-items-center">
            <video className="embed-responsive embed-responsive-16by9 video" autoPlay muted loop>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="overlay d-none d-md-block">
              <div className="row">
                <h1 className="col-lg-12 display-3 font-weight-normal text-white text-outline text-responsive">Welcome to the Galactic Commerce Corporation</h1>
              </div>
              <div className="row">
                <h1 className="col-lg-12 display-4 font-weight-normal text-white text-outline text-responsive">Serving Clients Across Euclid</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main
