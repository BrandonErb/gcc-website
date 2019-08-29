import React from 'react'
import emblem from './images/GCC_Emblem.png'

class About extends React.Component{
  render() {
    return (
      <div>
        <div className="bg-banner container-fluid">
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
        <div className="">
          <div className="position-relative overflow-hidden m-md-5 m-lg-5 p-md-5 p-lg-5">
            <div className="col-md-8 my-5 mx-auto p-md-5 p-lg-5 rounded bg-about-box">
              <h1 className="display-4 font-weight-normal">About</h1>
              <p className="lead font-weight-normal">
              The Galactic Commerce Corporation provides wealth services to clients across the Euclid galaxy.
              Clients have access to farms, ships, multi-tools, and mining bases marketed by the corporation,
              as well as arranging exchanges of resources between clients.
              </p>
            </div>
          </div>
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-about bg-farming">
            <div className="col-md-5 p-md-5 p-lg-5 m-5 float-left bg-about-box rounded">
              <h1 className="display-4 font-weight-normal">Farming</h1>
              <p className="lead font-weight-normal">
              Farms have been constructed by the Galactic Commerce Corporation and are available for clients.
              Clients will have access to farms build by other clients that wish to share them on the network.
              </p>
            </div>
          </div>
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-about bg-explore">
            <div className="col-md-5 p-md-5 p-lg-5 m-5 float-right bg-about-box rounded">
              <h1 className="display-4 font-weight-normal">Exploration</h1>
              <p className="lead font-weight-normal">
              Members and associates are encouraged to explore together to the far reaches of the Euclid galaxy
              to visit other civilizations for trade and other commercial activities. When in Delta Quadrant explorers
              are encouraged to document exceptional multi-tools, ships, and freighters to be marketed by the corporation.
              </p>
            </div>
          </div>
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-about bg-trade">
            <div className="col-md-5 p-md-5 p-lg-5 m-5 float-left bg-about-box rounded">
              <h1 className="display-4 font-weight-normal">Trade</h1>
              <p className="lead font-weight-normal">
              The corporation trades resources with clients, this include raw resources, trade items, and upgrade modules.
              Clients are also encouraged to trade these resources between each other.
              </p>
            </div>
          </div>
          <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-about bg-wealth">
            <div className="col-md-5 p-md-5 p-lg-5 m-5 float-right bg-about-box rounded">
              <h1 className="display-4 font-weight-normal">Wealth</h1>
              <p className="lead font-weight-normal">
                The ultimate end goal is to provide wealth to everyone involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
