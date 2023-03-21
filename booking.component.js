import React, { Component } from "react";
import axios from 'axios';
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import '../components/style/booking.style.css';

export default class contactUs extends Component {
  constructor (props){
    super(props)
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeBookingComment = this.onChangeBookingComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        firstname: " ",
        lastname: " ",
        emailaddress: " ",
        phonenumber: " ",
        date: " ",
        time: " ",
        bookingcomment: " ",
        showAlert: false, // add showAlert to state and initialize it to false
      }
    }

  onChangeFirstName(e){
    this.setState({
      firstname: e.target.value
    })
  }
  onChangeLastName(e){
    this.setState({
      lastname: e.target.value
    })
  }
  onChangeEmailAddress(e){
    this.setState({
      emailaddress: e.target.value
    })
  }
  onChangePhoneNumber(e){
    this.setState({
      phonenumber: e.target.value
    })
  }
  onChangeDate(e){
    this.setState({
      date: e.target.value
    })
  }
  onChangeTime(e){
    this.setState({
      time: e.target.value
    })
  }
  onChangeBookingComment(e){
    this.setState({
      bookingcomment: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const booking ={
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      emailaddress: this.state.emailaddress,
      phonenumber: this.state.phonenumber,
      date: this.state.date,
      time: this.state.time,
      bookingcomment: this.state.bookingcomment,
    }
    console.log(booking)
    axios.post('http://localhost:5000/booking/add', booking)
    .then(res=>console.log(res.data));
    this.setState({ showAlert: true }); // set showAlert to true after form submission
    // window.location="/"
    this.props.history.push('/booking');
    
    this.setState({
        firstname: '',
        lastname: '',
        emailaddress: '',
        phonenumber: '',
        date: '',
        time: '',
        bookingcomment: ''
    })
    // window.alert("Your trip has has been booked! We'll contact you soon to confirm the details.")
    console.log(booking)
  }

  render() {
    const { showAlert } = this.state; // destructure showAlert from state
    return (
      <div className="bookingbackground">
      <Container >
        <h1 className="text-center mb-5 h1-booking">Book a Trip</h1>
        {showAlert && ( // display Alert only when showAlert is true
            <Alert
              variant="success"
              onClose={() => this.setState({ showAlert: false })}
              dismissible
            >
              Your trip has been booked! We'll contact you soon to confirm the details.
            </Alert>
          )}
        <Form className="form-booking" onSubmit={this.onSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={this.state.firstname} 
                  onChange={this.onChangeFirstName}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={this.state.lastname} 
                  onChange={this.onChangeLastName}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.emailaddress}
              onChange={this.onChangeEmailAddress}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={this.state.phonenumber}
              onChange={this.onChangePhoneNumber}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChangeDate}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              value={this.state.time}
              onChange={this.onChangeTime}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicComments">
            <Form.Label>Comments or Special Requests</Form.Label>
            <Form.Control
              as="textarea"
              name="comments"
              value={this.state.bookingcomment}
              onChange={this.onChangeBookingComment}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      </div>
    )
  }
}