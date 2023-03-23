import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import cincinnatiSkyline from '../assets/cincinnatiSkyline.jpeg';
import '../components/style/attractions.css';
import { Helmet } from 'react-helmet';


const Attraction = props => {
  return (
    <div className='attractionscards'>
        <div class="card attractions-card">     
          <div class="card-body">
            <div className='attractioncardtitle'>
              {props.attraction.attraction}
            </div> 
            <div>
              <img src={props.attraction.image} alt="" className='card-img-top attractioncardimage' />
            </div>
            <div className='button-position'>
              <button type="button" class="btn btn-primary2">
                <Link Link to={"attractions/" + props.attraction._id} className='button-text'>See More</Link>
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
    
    this.state = {attractions: [], filteredAttractions: []};  
  }

  componentDidMount() {
    axios.get('http://localhost:5000/attractions/')
      .then(response => {
        this.setState({ attractions: response.data, filteredAttractions: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleClick = (rating) => {
    if (rating === "3") {
      this.setState({ filteredAttractions: this.state.attractions.filter(attraction => attraction.ratings <= 3) });
    } else if (rating === "4") {
      this.setState({ filteredAttractions: this.state.attractions.filter(attraction => attraction.ratings === 4) });
    } else if (rating === "5") {
      this.setState({ filteredAttractions: this.state.attractions.filter(attraction => attraction.ratings === 5) });
    } else {
      this.setState({ filteredAttractions: this.state.attractions });
    }
  }

  attractionList() {
    return this.state.filteredAttractions.map(currentattraction => {
      return <Attraction attraction={currentattraction} key={currentattraction._id}/>;
    })
  }

    
      render() {
        const TITLE = 'Attractions';
        return (
          <>
          <Helmet>
          <title>{ TITLE }</title>
          </Helmet>
          <div>
            <div className='showcaseattraction'>
            <div className='showcase-overlayattraction'>
            </div>
            </div>
            <div className='backattractions'>
              <h2 id="header">Posted Attractions</h2>
              <div className='filter-buttons'>
                <button onClick={() => this.handleClick("3")} className='button-32'>3 Stars or Less</button>
                <button onClick={() => this.handleClick("4")} className='button-32'>4 Stars</button>
                <button onClick={() => this.handleClick("5")} className='button-32'>5 Stars</button>
                <button onClick={() => this.handleClick("all")} className='button-31'>All Attractions</button>
              </div>
              <div>
                  <div className='attractionscards'>
                    {this.attractionList()}
                  </div>
              </div>
            </div>
          </div>
          </>
        )
      }
    }
