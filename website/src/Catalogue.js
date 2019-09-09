import React from 'react'
import ModalImage from "react-modal-image"
import './index.css'
import './catalogue.css'
import Banner from './Banner'

class Catalogue extends React.Component {
  constructor(props){
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      starships: [
        { id: 1000, image:"/1000.jpg", name: 'Parallax Wings OI8', system:'Terisaire-GCC', address: '0FE3:0005:0FFD:01FD', sClass:'A', slots:'38(12)', type:'fighter', area:'FDI', bonus: {damage: '-', shield: '-', hyperdrive: '-' }}
      ],
      freighters: [
        { id: 1001, image:"/1001.jpg", name: 'Isesakai', system:'Hetbuinka', address: '09E3:007C:0E1F:0001', fClass:'A', slots:'20(4)', type:'freighter', area:'unknown', bonus: {hyperdrive: '-' }}
      ],
      multitools: [
        { id: 1002, image:"/1002.jpg", name: 'Return of Silence', system:'Algovi IV', planet:'Smeyarch Mich', coords: {x: '', y: ''}, address: '09D2:0081:0E19:00B7', mClass:'S', slots:'24', type:'rifle', area:'unknown', bonus: {damage: '-', mining: '-', scanner: '-' }}
      ]
    }
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
                    <th scope="col">Bonuses</th>
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
                    <th scope="col">Bonuses</th>
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
                    <th scope="col">Bonuses</th>
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
         const { id, image, name, type, system, address, area, sClass, slots, bonus} = ship //destructuring
         return (
          <tr key={id}>
              <td className="img-col p-1">
                <ModalImage
                  className="thumbnail"
                  small={window.location.origin + image}
                  large={window.location.origin + image}
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
              <td className="align-middle">
                <div>
                  <div className="row bonus-row">Damage: {bonus.damage}</div>
                  <div className="row bonus-row">Shield: {bonus.shield}</div>
                  <div className="row bonus-row">Hyperdrive: {bonus.hyperdrive}</div>
                </div>
              </td>
            </tr>
         )
      })
  }

  RenderFreighterTable () {
    return this.state.freighters.map((freighter, index) => {
         const { id, image, name, type, system, address, area, fClass, slots, bonus} = freighter //destructuring
         return (
          <tr key={id}>
              <td className="img-col p-1">
                <ModalImage
                  className="thumbnail"
                  small={window.location.origin + image}
                  large={window.location.origin + image}
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
              <td className="align-middle">
                <div>
                  <div className="row bonus-row">Hyperdrive: {bonus.hyperdrive}</div>
                </div>
              </td>
            </tr>
         )
      })
  }

  RenderMultiToolTable () {
    return this.state.multitools.map((multitool, index) => {
         const { id, image, name, type, system, planet, coords, address, area, mClass, slots, bonus} = multitool //destructuring
         return (
          <tr key={id}>
              <td className="img-col p-1">
                <ModalImage
                  className="thumbnail"
                  small={window.location.origin + image}
                  large={window.location.origin + image}
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
              <td className="align-middle">
                <div>
                  <div className="row bonus-row">Damage: {bonus.damage}</div>
                  <div className="row bonus-row">Mining: {bonus.mining}</div>
                  <div className="row bonus-row">Scanner: {bonus.scanner}</div>
                </div>
              </td>
            </tr>
         )
      })
  }

}

export default Catalogue
