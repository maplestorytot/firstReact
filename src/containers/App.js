import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {
  //state only for components with extends components
  // if state changes, it will rerender the render()
  state = {
    persons: [
      { id: "14", name: "max", age: 23 },
      { id: "15", name: "steph", age: 31 },
      { id: "19", name: "dadm", age: 9 }
    ],
    companies: "hi",
    showPersons: false
  };

  switchNameHandler = newName => {
    //DONT DO THIS this.state.persons[0].name='RYAn';
    //set states make sure do rerender() and updates DOM
    //here, only persons is being affected, companies remains there without change
    this.setState({
      persons: [
        { name: newName, age: 11 },
        { name: "only me", age: 11 },
        { name: "only me", age: 11 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    //find index where the id is equal to the one given
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // put person into an entirely new object, not just referenced therefore use spread
    // spread,  get all properties into the new object, or can use object.assign
    const person = { ...this.state.persons[personIndex] };
    //asign the person's name to the input
    person.name = event.target.value;
    //put array into entirely new array, not just referenced thus use spread
    const persons = [...this.state.persons];
    //change state
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    // making it oppsoite the last state of showpersons
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    //we call slice here to copy the array
    //this is to prevent just copying the address of the array and then any changes doesn't
    //affect new const, but the original
    // const persons=this.state.persons.slice();
    //or can do this way which just takes the objects and puts it into new array
    const persons = [...this.state.persons];
    //remove one at the index
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {

    //conditionally add html
    let persons = null;
    //since render is called when set state
    // use function here to do conditional check, then add html to main return
    if (this.state.showPersons) {
      // to change styles dynamically, place within the if statement somewhere, and then just change properties of the style const
      persons = (
          <Persons persons={this.state.persons}
           clicked={this.deletePersonHandler} 
           changed={this.nameChangedHandler}
          ></Persons>
      );
    }
   
    return (
        <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}/>
          {persons}
        </div>
    );

    //'div' is what kind of html, second is adding styling, third is text inside it
    // here we nested them
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'hey htis my react code'))
  }
}

export default App;
