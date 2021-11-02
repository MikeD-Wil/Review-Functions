// rcc
import React, { Component } from 'react'
import People from './People'

class People extends Component {
 {
    render() {

        return (
            <div className="App">
                <h1>My 1st React App</h1>
                <p> Hello, there. </p>
                <People people={this.state.people} />
            </div>
        );
    }
}


export default People