/// rcc
import React from 'react';
import './People.css'

const People = ( { people, deletePerson } ) => {
    

    const peopleList = people.map( person => {
        return person.age > 21 ? (
            <div className="person" key={person.id}>
                <div>Name: {person.name}</div>
                <div>Age: {person.age}</div>
                <div> favColor: {person.favColor}</div>
                <button>Delete person</button>
                <button onClick={deletePerson(person.id)}>Delete person</button>
                <button onClick={ () => {deletePerson(person.id)}}>Delete person</button>
            </div>
        ) : null;
    } );
    return (
<div className = "person-list" >
    { peopleList }
        </div>
    );

}


 

export default People