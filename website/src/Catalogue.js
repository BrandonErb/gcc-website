import React from 'react'
import './index.css'
import './catalogue.css'
//import starship from './images/1000.jpg'
import freighter from './images/1001.jpg'
import multitool from './images/1002.jpg'

class Catalogue extends React.Component {
  constructor(props){
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      starships: [
        { id: 1000, image:"/1000.jpg", name: 'Parallax Wings OI8', system:'Terisaire-GCC', address: '0FE3:0005:0FFD:01FD', class:'A', slots:'38(12)', type:'fighter', area:'FDI' }
      ],
      freighters: [
        { id: 1001, image:{freighter}, name: 'Isesakai', system:'Hetbuinka', address: '09E3:007C:0E1F:0001', class:'A', slots:'20(4)', type:'freighter', area:'unknown'}
      ],
      multitool: [
        { id: 1002, image:{multitool}, name: 'Return of Silence', system:'Algovi IV', planet:'Smeyarch Mich', coords:'', address: '09D2:0081:0E19:00B7', class:'S', slots:'24', type:'rifle', area:'unknown'}
      ]
    }
  }

  render() {
    return (
      <div className="p-3 cat-div">
        <div>
          <h2 className="title font-weight-normal">Starships</h2>
          <div className="table-responsive">
            <table className="table table-dark table-bordered cat-table">
              <thead>
                <th className="img-col" scope="col">thumbnail</th>
                <th className="key-col" scope="col">name</th>
                <th scope="col">type</th>
                <th scope="col">system</th>
                <th className="key-col" scope="col">address</th>
                <th scope="col">area</th>
                <th scope="col">class</th>
                <th scope="col">slots</th>
              </thead>
              <tbody>
                {this.RenderStarshipTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  RenderStarshipTable () {
    return this.state.starships.map((ship, index) => {
         const { id, image, name, type, system, address, area, eClass, slots} = ship //destructuring
         return (
            <tr key={id}>
              <td className="img-col"><img className="thumbnail" src={window.location.origin + image}/></td>
              <td className="key-col">{name}</td>
              <td>{type}</td>
              <td>{system}</td>
              <td className="key-col">{address}</td>
              <td>{area}</td>
              <td>{eClass}</td>
              <td>{slots}</td>
            </tr>
         )
      })
  }

}

export default Catalogue
