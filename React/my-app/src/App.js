// rcc
import React, { Component } from 'react'
import People from './People'

class App extends Component {
  state = {
    people: [
      { name: 'Mike', age: '100', favColor: 'Vantablack', id: 1 },
      { name: 'Young', age: '103', favColor: 'Black', id: 2 },
      { name: 'kendrick', age: '101', favColor: 'Dark Red', id: 3 },
    ]
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <h1>My 1st React App</h1>
      <p>what up</p>
        <People people={ this.state.people }/>
    </div>
    )
  }
}



export default App;



