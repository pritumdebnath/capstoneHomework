import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import cincinnatiSkyline from '../assets/cincinnatiSkyline.jpeg';
import '../components/style/attractions.css';


const Attraction = props => {
  return (
    <div className='attractionscards'>
        <div class="card">     
          <div class="card-body">
            <div className='attractioncardtitle'>
              {props.attraction.attraction}
            </div> 
            <div>
              <img src={props.attraction.image} alt="" className='card-img-top attractioncardimage' />
            </div>
            <div>
              <button type="button" class="btn btn-primary2">
                <Link Link to={"attractions/" + props.attraction._id}>See More</Link>
              </button> 
            </div>  
          </div>
        </div>
    </div>
  )
}


export default class Attractions extends Component {
    constructor(props) {  
        super(props); 
        
        this.state = {attractions: []};  
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/attractions/')
         .then(response => {
           this.setState({ attractions: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }
    
      attractionList() {
        return this.state.attractions.map(currentattraction => {
          return <Attraction attraction={currentattraction} key={currentattraction._id}/>;
        })
      }
    
  render() {
    return (
      
      <div>
        <div>
          <img src={cincinnatiSkyline} alt="" className='skyline' />
        </div>
        <div className='backattractions'>
          <h2 id="header">Posted Attractions</h2>
          <div>
              <div className='attractionscards'>
                {this.attractionList()}
              </div>
          </div>
        </div>
      </div>
      
    )
  }
}
