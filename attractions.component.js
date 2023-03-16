import React, { Component } from 'react';
import { Link } from 'react-router-dom';  
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import kingsIsland from "../assets/kingsIsland2.jpeg";
// import greatAmerican from "../assets/greatAmerican.jpeg";
// import paycorStadium from "../assets/paycorStadium.jpeg";
// import tqlStadium from "../assets/tqlStadium.jpeg";
// import heritageBankArena from "../assets/heritageBankArena.jpeg";
// import ucCampus from "../assets/ucCampus.jpeg";
// import xavierUniversity from "../assets/xavierUniversity.jpeg";
// import cincinnatiZoo from "../assets/cincinnatiZoo.jpeg";
// import taftTheater from "../assets/taftTheater.jpeg";
import cincinnatiSkyline from "../assets/cincinnatiSkyline.jpeg";
//import cincinnatiSportsLogos from "../assets/cincinnatiSportsLogos.png";

import '../components/style/attractions.css';




const Attraction = props => {
  return (
    <>
    
    <div className='attractionscards'>
        <div class="card">     
          <div class="card-body">
            <div className='attractioncardtitle'>
              {props.attraction.attraction}
            </div> 
            <div>
              <img src={props.attraction.image} alt="image" className='card-img-top attractioncardimage' />
            </div>
            <div>
              <p class="card-text">
                Kings Island is a 364-acre amusement park located 24 miles (39 km) northeast of Cincinnati in Mason, Ohio, United States. Owned and operated by Cedar Fair, the park first opened in 1972 by the Taft Broadcasting Company.
              </p>
            </div> 
            <div>
              <button type="button" class="btn btn-primary2">
                <Link Link to={"attractions/" + props.attraction._id}>See More</Link>
              </button> 
            </div>  
          </div>
        </div>
    </div>
    
    </>
  )
}


export default class Attractions extends Component {
    constructor(props) {  
        super(props); 
        
        this.deleteAttraction = this.deleteAttraction.bind(this); 
        
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

      deleteAttraction(id) {  
        axios.delete('http://localhost:5000/attractions/'+id)  
        .then(res => console.log(res.data)); 
    
        this.setState({  
        attractions: this.state.attractions.filter(el => el._id !== id)  
        })  
    }
    
      attractionList() {
        return this.state.attractions.map(currentattraction => {
          return <Attraction attraction={currentattraction} deleteAttraction={this.deleteAttraction} key={currentattraction._id}/>;
        })
      }
    
  render() {
    return (
      
  <div>
  
  <div> 
    <img className="home-component" src={cincinnatiSkyline} alt="Cincinnati Skyline"></img>
    
  </div>
      
  <div className='backattractions'>
  <h2 id="header">Posted Attractions</h2>
  <div>

  <div>
    <div className='attractionscards'>
      {this.attractionList()}
    </div>
  </div>

  </div>
  </div>

  {/* <div className="col-md-4">
      <div class="card">     
        <div class="card-body">  
          {this.attractionList()}
        </div>
      </div>
    </div> */}
  

    {/* <div className="col-md-4">
      <div class="card">     
        <h3 class="card-title kIHeader">Kings Island</h3>
        <div class="card-body">  
          <img className="card-img-top kI" src={kingsIsland}alt="Kings Island Roller Coaster" />
  
          <p class="card-text">Kings Island is a 364-acre amusement park located 24 miles (39 km) northeast of Cincinnati in Mason, Ohio, United States. Owned and operated by Cedar Fair, the park first opened in 1972 by the Taft Broadcasting Company.</p>

          <button type="button" class="btn btn-primary">Details</button> 
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div class="card">
        <h3 class="card-title gAHeader">Great American Ballpark</h3>
        <div class="card-body">
          <img className="card-img-top greatAmerican" src={greatAmerican}alt="greatAmericanStadium" />
          
          <p class="card-text">Located on the winding banks of the Ohio River in downtown Cincinnati, Great American Ball Park serves as the home of the Cincinnati Reds, baseball's first professional franchise.</p>

          <button type="button" class="btn btn-primary">Details</button> 
        </div>
      </div>
    </div>

      
    <div className="col-md-4">
      <div class="card card">    
        <h3 class="card-title tQLHeader">TQL Stadium</h3>
        <div class="card-body ">
          <img className="card-img-top tql" src={tqlStadium}alt="TQL Stadium" />
        
          <p class="card-text">TQL Stadium, called West End Stadium during construction, is a soccer-specific stadium in Cincinnati, Ohio. It is the home of FC Cincinnati, a Major League Soccer (MLS) team that had been temporarily playing at Nippert Stadium.</p>
          
          <button type="button" class="btn btn-primary">Details</button> 
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div class="card card">    
        <h3 class="card-title paycorHeader">Paycor Stadium</h3>
        <div class="card-body ">
          <img className="card-img-top paycor" src={paycorStadium}alt="Paycor Stadium" />
        
          <p class="card-text">Paycor Stadium has several amenities including 144 luxury suites, over 7,000 club seats, two club restaurants and a Bengals team store. Fans attending games at Paycor Stadium can see beautiful views of the Cincinnati skyline and the Ohio River.</p>

          <button type="button" class="btn btn-primary">Details</button> 
        </div>
      </div>
    </div>

<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title hAHeader">Heritage Bank Arena</h3>
    <div class="card-body ">
   
    <img className="card-img-top heritage" src={heritageBankArena}alt="Cyclones Stadium" />
    
      <p class="card-text">The arena seats 17,556 people and is the largest indoor arena in the Greater Cincinnati region with 346,100 square feet of space. The current main tenant is the Cincinnati Cyclones of the ECHL.</p>
      <button type="button" class="btn btn-primary2">Details</button> 
    </div>
  </div>
</div>

<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title cZHeader">Cincinnati Zoo</h3>
    <div class="card-body-background">
   
    <img className="card-img-top cincinnatiZoo" src={cincinnatiZoo}alt="Cincinnati Zoo" />
    
      <p class="card-text">Rated by peer zoological parks as one of the best zoos in the nation, the Cincinnati Zoo continues to set the standard for conservation, education and preservation of wild animals and wild spaces. More than 1.5 million people visit the Zoo annually.</p>
      <button type="button" class="btn btn-primary2">Details</button> 
    </div>
  </div>
</div>

<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title cZHeader">University of Cincinnati</h3>
    <div class="card-body ">
   
    <img className="card-img-top uc" src={ucCampus}alt="University of Cincinnati" />
    
      <p class="card-text">UC boasts many top-ranked programs, and is the No. 1 public university for co-op (No. 3 overall). Named among the world's 100 most-innovative universities and our campus is listed among the world's most beautiful.</p>
      <button type="button" class="btn btn-primary2">Details</button> 
    </div>
  </div>
</div>

<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title cZHeader">Xavier University</h3>
    <div class="card-body ">
   
    <img className="card-img-top xavier" src={xavierUniversity}alt="Xavier University" />
    
      <p class="card-text">Xavier University is a private university located in Cincinnati, Ohio, providing a liberal arts education in the Jesuit Catholic tradition. Founded in 1831, the University is the sixth-oldest Catholic university in the nation.</p>
      <button type="button" class="btn btn-primary2">Details</button> 
    </div>
  </div>
</div>

<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title cZHeader">Taft Theater</h3>
    <div class="card-body ">
   
    <img className="card-img-top taftTheater" src={taftTheater}alt="Taft Theater" />
    
      <p class="card-text">Located in the heart of downtown Cincinnati, the Taft Theatre is your premiere destination for live entertainment. The Theatre opened in 1928 and is a marvelous display of the neo-classical/art deco architecture that prevailed during the time period.</p>
      <button type="button" class="btn btn-primary2">Details</button> 
    </div>
  </div>
</div>

<div className="col-md-4">
  <div class="card card">    
    <h3 class="card-title cZHeader">Taft Theater</h3>
    <div class="card-body ">
      { this.attractionList() }
    
    </div>
  </div>
</div> */}


          {/* <tbody>
            { this.attractionList() }
          </tbody> */}
      
</div>

      
    )
  }
}


{/* <tr>
      <td>{props.attraction.attraction}</td>
      <td>{props.attraction.address}</td>
      <td>{props.attraction.image}</td>
      <td>{props.attraction.description}</td>
      <td>{props.attraction.ratings}</td>
      <td>{props.attraction.user}</td>
      <td>
        <Link to={"/edit/"+props.attraction._id}>edit</Link> | <a href="#" onClick={() => { props.deleteAttraction(props.attraction._id) }}>delete</a>
      </td>
    </tr> */}