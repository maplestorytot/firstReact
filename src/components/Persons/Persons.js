import React from 'react'
import Person from './Person/Person'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
const persons=(props)=>
/* using map function to take each element (person) from array (persons), and returning 
            html  */
    props.persons.map((person, index) => {
        // creating css class list by making a string
        return (
          <ErrorBoundary key={person.id}><Person
            //add a key property so that when the dom and virutal dom are being compared
            //it knows to search by id difference so that it only changes the specific
            //part of the dom and doesn't rerender the entire thing
            
            click={props.clicked.bind(this, index)}
            name={person.name}
            age={person.age}
            changed={event => {
              props.changed(event, person.id);
            }}
          /></ErrorBoundary>
        );
      });

       {/* <Person 
            // bind is to add argument to the function, this refers to class
            click={this.switchNameHandler.bind(this, "loser")}
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
            <Person 
            changed={this.nameChangedHandler}
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>my hobbies</Person>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}></Person> */}

export default persons;
