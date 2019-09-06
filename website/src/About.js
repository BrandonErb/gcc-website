import React from 'react'
import 'bootstrap/scss/bootstrap.scss'
import './index.css'
import Banner from './Banner'

class About extends React.Component{
  render() {
    return (
      <div>
        <Banner/>
        <div>
          <div className="position-relative overflow-hidden mx-auto p-3 p-lg-5 m-lg-3 bg-about bg-about-img">
            <div className="col-lg-7 mx-auto rounded-lg bg-about-box my-lg-7 p-lg-5">
              <h1 className="display-4 font-weight-normal">About</h1>
              <p className="lead font-weight-normal">
              The Galactic Commerce Corporation provides wealth services to clients across the Euclid galaxy.
              Clients have access to farms, ships, multi-tools, and mining bases marketed by the corporation,
              as well as arranging exchanges of resources between clients.
              </p>
            </div>
          </div>
          <div className="position-relative overflow-hidden p-3 p-lg-5 m-lg-3 bg-about bg-farming">
            <div className="col-lg-5 p-lg-5 m-lg-5 m-md-3 m-sm-1 m-xs-1 float-left bg-about-box rounded-lg ml-sm-1">
              <h1 className="display-4 font-weight-normal">Farming</h1>
              <p className="lead font-weight-normal">
              Farms have been constructed by the Galactic Commerce Corporation and are available for clients.
              Clients will have access to farms build by other clients that wish to share them on the network.
              </p>
            </div>
          </div>
          <div className="position-relative overflow-hidden p-3 p-lg-5 m-lg-3 bg-about bg-explore">
            <div className="col-lg-5 p-lg-5 m-lg-5 m-md-3 m-sm-1 m-xs-1 float-right bg-about-box rounded-lg mr-sm-1">
              <h1 className="display-4 font-weight-normal">Exploration</h1>
              <p className="lead font-weight-normal">
              Members and associates are encouraged to explore together to the far reaches of the Euclid galaxy
              to visit other civilizations for trade and other commercial activities. When in Delta Quadrant explorers
              are encouraged to document exceptional multi-tools, ships, and freighters to be marketed by the corporation.
              </p>
            </div>
          </div>
          <div className="position-relative overflow-hidden p-3 p-lg-5 m-lg-3 bg-about bg-trade">
            <div className="col-lg-5 p-lg-5 m-lg-5 m-md-3 m-sm-1 m-xs-1 float-left bg-about-box rounded-lg ml-sm-1">
              <h1 className="display-4 font-weight-normal">Trade</h1>
              <p className="lead font-weight-normal">
              The corporation trades resources with clients, this include raw resources, trade items, and upgrade modules.
              Clients are also encouraged to trade these resources between each other.
              </p>
            </div>
          </div>
          <div className="position-relative overflow-hidden p-3 p-lg-5 m-lg-3 bg-about bg-wealth">
            <div className="col-lg-5 p-lg-5 m-lg-5 m-md-3 m-sm-1 m-xs-1 float-right bg-about-box rounded-lg">
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
