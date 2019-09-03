import React from 'react'
import backgroundVideo from './video/video_hauler.mp4'

class Main extends React.Component{
  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden bgc px-3">
          <div className="d-flex justify-content-center align-items-center">
            <video className="embed-responsive embed-responsive-16by9 video" autoPlay muted loop>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="overlay">
              <div className="row">
                <h1 className="col-lg-12 display-3 font-weight-normal text-white text-outline">Welcome to the Galactic Commerce Corporation</h1>
              </div>
              <div className="row">
                <h1 className="col-lg-12 display-4 font-weight-normal text-white text-outline">Serving Clients Across Euclid</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main
