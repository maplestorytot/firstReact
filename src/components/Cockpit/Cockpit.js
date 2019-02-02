import React from "react";
import classes from './Cockpit.css'

const cockpit = (props) => {
    let btnClass=''
    if(props.showPerons){
        btnClass=classes.Red;
    }

    let assingedClasses = [];
    if (props.persons.length <= 2) {
      assingedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assingedClasses.push(classes.bold);
    }

  return (
    <div className={classes.Cockpit}>
      <h1>hey this is my react App</h1>
      <p className={assingedClasses.join(" ")}> this is really working </p>
      {/* don't add this.switchnamehandler() because will run automatically  */}
      {/*()=>this.switchnamehandler('other way to add arguments to functions') */}
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
