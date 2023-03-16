import React, { Component } from 'react';
import axios from 'axios';

export default class oneAttraction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attraction: '',
            address: '',
            imageURL: '',
            description: '',
            ratings: '',
            user: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/attractions/' + this.props.match.params.id)
        .then((response) => {
            this.setState({
                attraction: response.data.attraction,
                address: response.data.address,
                imageURL: response.data.imageURL,
                description: response.data.description,
                ratings: response.data.ratings,
                user: response.data.user
            })
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(this.state.attraction)
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.attraction}
                </div>           
                <div>
                    {this.state.address}
                </div>           
                <div>
                    {this.state.image}
                </div>           
                <div>
                    {this.state.description}
                </div>           
                <div>
                    {this.state.ratings}
                </div>           
                <div>
                    {this.state.user} 
                </div>           
            </div>
        )
    }
}