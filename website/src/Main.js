import React from 'react'
import emblem from './images/GCC_Emblem.png'

class Main extends React.Component{
  render() {
    return (
      <div>
        <div className="position-relative overflow-hidden text-center main">
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
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Welcome to the GCC</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Main
