import React from 'react'
import backgroundVideo from './video/background_video.mp4'

class Main extends React.Component{
  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden text-center bgc">
          <div className="d-flex justify-content-center align-items-center container">
            <video className="embed-responsive embed-responsive-16by9 video" autoPlay muted loop>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="d-flex overlay">
              <h1 className="display-3 font-weight-normal text-white text-outline">Serving Clients Across Euclid</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main
