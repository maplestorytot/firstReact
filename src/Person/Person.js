import React from "react";
import "./Person.css";
import Radium from "radium";
//props from App.js <Person name='ryan' age='53'>
const person = props => {

    const style={
        '@media (min-width:500px)':{
            width:'450px'
        }
    }


  return (
    //   style will be appended to the css class based on @media condition
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
