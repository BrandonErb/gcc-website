import React from 'react'
import ModalImage from "react-modal-image"
import './index.css'
import './catalogue.css'
import Banner from './Banner'
import axios from 'axios'

class Catalogue extends React.Component {
  constructor(props){
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      starships: [],
      freighters: [],
      multitools: []
    }
  }

  //const exUri = 'ec2-34-238-122-74.compute-1.amazonaws.com'

  componentDidMount() {
      //const GetShips = axios.get(`http://localhost:5000/ships`)
      const GetShips = axios.get(`https://gcc-webservice.herokuapp.com/ships`)
                          .then (res => {
                            const starships = res.data;
                            this.setState({starships});
                          });
      //const GetFreighters =  axios.get(`http://localhost:5000/freighters`)
      const GetFreighters =  axios.get(`https://gcc-webservice.herokuapp.com/freighters`)
                                .then ( res => {
                                  const freighters = res.data;
                                  this.setState({freighters});
                                });
      //const GetMultitools = axios.get(`http://localhost:5000/multitools`)
      const GetMultitools = axios.get(`https://gcc-webservice.herokuapp.com/multitools`)
                                .then(res => {
                                  const multitools = res.data;
                                  this.setState({multitools});
                                });
      Promise.all( [GetShips, GetFreighters, GetMultitools] );
  }

  render() {
    return (
      <div>
        <Banner/>
        <div className="p-3 cat-div">
          <div className="input-group col-md-3 ml-auto my-1 p-0">
            <div className="input-group-prepend">
              <span className="input-group-text" id="Filter">
                <span className="oi oi-magnifying-glass"></span>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Filter" aria-label="Filter" aria-describedby="filter-search" disabled={true}/>
          </div>
          <div>
            <h2 className="title font-weight-normal mb-3 text-responsive">Starships</h2>
            <div className="table-responsive">
              <table className="table table-dark table-bordered cat-table">
                <thead>
                  <tr>
                    <th className="img-col" scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">System</th>
                    <th className="" scope="col">Address</th>
                    <th scope="col">Area</th>
                    <th scope="col">Class</th>
                    <th scope="col">Slots</th>
                  </tr>
                </thead>
                <tbody>
                  {this.RenderStarshipTable()}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="title font-weight-normal mb-3 text-responsive">Freighters</h2>
            <div className="table-responsive">
              <table className="table table-dark table-bordered cat-table">
                <thead>
                  <tr>
                    <th className="img-col" scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">System</th>
                    <th className="" scope="col">Address</th>
                    <th scope="col">Area</th>
                    <th scope="col">Class</th>
                    <th scope="col">Slots</th>
                  </tr>
                </thead>
                <tbody>
                  {this.RenderFreighterTable()}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="title font-weight-normal mb-3 text-responsive">Multi-Tools</h2>
            <div className="table-responsive">
              <table className="table table-dark table-bordered cat-table">
                <thead>
                  <tr>
                    <th className="img-col" scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">System</th>
                    <th scope="col">Planet</th>
                    <th scope="col">Coordinates</th>
                    <th className="" scope="col">Address</th>
                    <th scope="col">Area</th>
                    <th scope="col">Class</th>
                    <th scope="col">Slots</th>
                  </tr>
                </thead>
                <tbody>
                  {this.RenderMultiToolTable()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }

  RenderStarshipTable () {
    return this.state.starships.map((ship, index) => {
         const { id, image_url, name, type, system, address, area, sClass, slots} = ship //destructuring
         return (
          <tr key={id}>
              <td className="img-col p-1">
                <ModalImage
                  className="thumbnail"
                  small={image_url}
                  large={image_url}
                  hideDownload={true}
                  hideZoom={true}
                  alt="thumbnail"
                />
              </td>
              <td>{name}</td>
              <td>{type}</td>
              <td>{system}</td>
              <td className="">{address}</td>
              <td>{area}</td>
              <td>{sClass}</td>
              <td>{slots}</td>
            </tr>
         )
      })
  }

  RenderFreighterTable () {
    return this.state.freighters.map((freighter, index) => {
         const { id, image_url, name, type, system, address, area, fClass, slots} = freighter //destructuring
         return (
          <tr key={id}>
              <td className="img-col p-1">
                <ModalImage
                  className="thumbnail"
                  small={image_url}
                  large={image_url}
                  hideDownload={true}
                  hideZoom={true}
                  alt="thumbnail"
                />
              </td>
              <td>{name}</td>
              <td>{type}</td>
              <td>{system}</td>
              <td className="">{address}</td>
              <td>{area}</td>
              <td>{fClass}</td>
              <td>{slots}</td>
            </tr>
         )
      })
  }

  RenderMultiToolTable () {
    return this.state.multitools.map((multitool, index) => {
         const { id, image_url, name, type, system, planet, coords, address, area, mClass, slots} = multitool //destructuring
         return (
          <tr key={id}>
              <td className="img-col p-1">
                <ModalImage
                  className="thumbnail"
                  small={image_url}
                  large={image_url}
                  hideDownload={true}
                  hideZoom={true}
                  alt="thumbnail"
                />
              </td>
              <td>{name}</td>
              <td>{type}</td>
              <td>{system}</td>
              <td>{planet}</td>
              <td className="align-middle">
                <div>
                  <div className="row bonus-row">X: {coords.x}</div>
                  <div className="row bonus-row">Y: {coords.y}</div>
                </div>
              </td>
              <td className="">{address}</td>
              <td>{area}</td>
              <td>{mClass}</td>
              <td>{slots}</td>
            </tr>
         )
      })
  }

}

export default Catalogue
