// rcc
import React, { Component } from 'react'
import People from './People'
import AddPeople from "./AddPeople";

class App extends Component {
  state = {
    people: [
      { name: 'Mike', age: '100', favColor: 'Vantablack', id: 1 },
      { name: 'Young', age: '103', favColor: 'Black', id: 2 },
      { name: 'kendrick', age: '101', favColor: 'Dark Red', id: 3 },
    ]
  }
  addPerson = (person) => {
    person.id = Math.random();
    let people = [...this.state.people, person]
    this.setState({
      people: people
    })
  }
  
componentDidMount() {
  console.log( 'component mounted' );
} 

componentDidUpdate (prevProps, prevState){
  console.log( 'component updated' );
  console.log( prevProps, prevState );
}

    render() {
     return (
       <div className="App">
          <h1>My 1st React App</h1>
          <p>what up</p>
          <People people={this.state.people} />
        </div>
      );
  }
}

deletePerson = ( id ) => {
  <People people={ } deletePerson={ } />
    ;
}


export default App;



