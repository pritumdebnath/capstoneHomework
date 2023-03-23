import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/style/contactus.style.css";
import { Alert } from "react-bootstrap";
import { Helmet } from 'react-helmet';

export default class contactUs extends Component {
  constructor (props){
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: " ",
        email: " ",
        number: " ",
        comment: " ",
        showAlert: false, // add showAlert to state and initialize it to false
      }
    }

  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  onChangeNumber(e){
    this.setState({
      number: e.target.value
    })
  }
  onChangeComment(e){
    this.setState({
      comment: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const contact ={
      name: this.state.name,
      email: this.state.email,
      number: this.state.number,
      comment: this.state.comment,
    }
    console.log(contact)
    axios.post('http://localhost:5000/contactus/add', contact)
    .then(res=>console.log(res.data));
    this.setState({ showAlert: true }); // set showAlert to true after form submission
    // window.location="/"
    this.props.history.push('/contactus');
    
    this.setState({
        name: '',
        email: '',
        number: '',
        comment: ''
    })
    // window.alert('Thank you for your inquiry')
    console.log(contact)
  }
  render() {
    const { showAlert } = this.state; // destructure showAlert from state
    const TITLE = 'Contact Us';
    return (
      <>
      <Helmet>
          <title>{ TITLE }</title>
      </Helmet>
      <div class="containercontact shadow ">
        <div class="row">
            <div class="col-md-4 bg-primarycontact p-5 text-white order-sm-first order-last leftboxcontact">
                <h2>Queen City Tours</h2>
                {/* <p>We're open for any comment or suggestion!</p> */}
                <div className='sidebarcontact'>
                <div class="d-flex mt-2">
                    <i class="bi bi-geo-alt"></i>
                    <p class="mt-3 ms-3 pcontact">Address : 1 Queen City Way, Cincinnati, OH 45201</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-telephone-forward"></i>
                    <p class="mt-4 ms-3 pcontact">Phone : (513)000-0000</p>
                </div>
                <div class="d-flex mt-2">
                    <i class="bi bi-envelope"></i>
                    <p class="mt-4 ms-3 pcontact">Email : queencitytravel@email.com</p>
                </div>
                </div>
            </div>
            <div class="col-md-8 p-5 ">
                <h2>Leave a Comment!</h2>
                <form class="row g-3 contactForm mt-4" id='contact-form' onSubmit={this.onSubmit}>
                    <div class="col-12 form-group">
                      <label for="inputAddress" class="contact-label form-label">Name: </label>
                      <input 
                      type="text email" 
                      class="form-control" 
                      id="inputAddress" 
                      required 
                      value={this.state.name} 
                      onChange={this.onChangeName}/>
                    </div>
                    <div class="col-12 form-group">
                      <label for="inputAddress" class="contact-label form-label">Email: </label>
                      <input 
                      type="text email" 
                      class="form-control" 
                      id="inputAddress" 
                      required 
                      value={this.state.email}
                      onChange={this.onChangeEmail}/>
                    </div>
                    <div class="col-12 form-group">
                      <label for="inputAddress" class="contact-label form-label">Phone Number: </label>
                      <input 
                      type="text email" 
                      class="form-control" 
                      id="inputAddress" 
                      required 
                      value={this.state.number}
                      onChange={this.onChangeNumber}/>
                    </div>
                    <div class="col-12 form-group">
                      <label for="inputAddress" class="contact-label form-label">Comment: </label>
                      <input 
                      type="text email" 
                      class="form-control" 
                      id="inputAddress" 
                      required 
                      value={this.state.comment}
                      onChange={this.onChangeComment}/>
                    </div>
                    <div class="col-12 form-group">
                      <button type="submit" class="btn1 btn-primary1 mt-3" value="Send">Submit</button>
                    </div>
                    {showAlert && ( // display Alert only when showAlert is true
                      <Alert
                        variant="success"
                        onClose={() => this.setState({ showAlert: false })}
                        dismissible
                      >
                        Thank you for your feedback!
                      </Alert>
                    )}
                  </form>
            </div>
        </div>
    </div>
    </>
    )
  }
}