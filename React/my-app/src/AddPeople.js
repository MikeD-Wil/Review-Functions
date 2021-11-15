import React, { Component } from 'react'

class AddPeople extends Component {
    state = {
        name: null,
        age: null,
        favColor: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log( this.state );
    }
     
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor=""></label>
                    <input type="text" id='name' onChange={ }/>
                <label htmlFor="age">Age:</label>
                    <input type="text" id='age' onChange={ }/>
                <label htmlFor="favColor">favColor:</label>
                <input type="text" id='name' onChange={} />
                 </form>
                
            </div>
        )
    }
}
export default AddPeople