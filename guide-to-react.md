#summary start
create-react-app name-of-app
npm start

how it works:
in index.html, has <div id="root">
in index.js, <div id="root"> renders App (App.js)

index.css/app.css are global styling


#note about git
if creating a project and want to push to a remote repository
in terminal
1) git init
2) go to github create repository
3) commit changes 
4) git remote add origin https://github.com/maplestorytot/firstReact.git
5)push to changes  or git push -u origin master

#How does JSX work:::
1 and 2 are equivalent but jsx code 1 basically is compiled into 2
1) render() {
    return (
      <div className="App">
        <h1>
          hey this is my react App
        </h1>
      </div>
    );


 2)// return React.createElement('div',{className:'App'},React.createElement('h1',null,'hey htis my react code'))

3) can't use class because already used



#How to use Components:::
1) to pass properties (props) in app.js, add as class like name, age, then {props.name}
2) to pass embedded text, use {props.children}

<app.js>
<Person name="ryan" age="25"/>
<Person name="ryan" age="25">my hobbies</Person>


<person.js>
const person=(props)=>{
    return <div>
    
    <p>I'm {props.name} and I am {props.age} old</p>
    <p>{props.children}</p>

    </div>
};




#changing state :::
<app.js>
switchNameHandler=(newName)=>{
      //DONT DO THIS this.state.persons[0].name='RYAn';
      //set states make sure do rerender() and updates DOM
      //here, only persons is being affected, companies remains there without change 
      this.setState({persons:[{name:newName, age:11},{name:'only me', age:11},{name:'only me', age:11}]})
    }
-note functions can have parameters such as newName, just do:
1)         <button onClick={()=>this.switchNameHandler('tryan chang')}>Switch Name</button>
2)         <onClick={this.switchNameHandler.bind(this, "loser")}



#interaction between components:::
1)<app.js> 
define a click function as a property
<Person 
        click={this.switchNameHandler} 

<person.js>: can use that function now
   <p onClick={props.click}>


2)<app.js>: event holds target.value  properties
    nameChangedHandler=(event)=>{
      this.setState({persons:[{name:'only me', age:11},{name:event.target.value, age:11},{name:'only me', age:11}]})
    }

    <Person 
        changed={this.nameChangedHandler}
        name={this.state.persons[1].name} 
<person.js>: props.changed connects to above.. also set value automatically so name displays in the input from the start 
    
    <input type="text" onChange={
        props.changed 
    }
    value={props.name}/>






#Displaying Components CONDITIONALLY:::
<app.js>: //this.state.showpersons is the condition, ? is separating everyithing
        {this.state.showPersons ?
          <div >
             stuff you want to show
            </div>:null
<!-- after : is the else statement, what to display, here is null -->


other way: 
 //conditionally add html: always put within the render function so that it checks, and starts as null unless condition is met
    <let persons=null;
    //since render is called when set state
    // use function here to do conditional check, then add html to main return 
    if(this.state.showPersons){
      persons=(
          <div >stuff want to append</div>
        


        then add: to main return statement 
        {persons}




#display lists
 {/* using map function to take each element (person) from array (persons), and returning 
            html , map also has an index argument when can be used to get the index of element*/}
            {this.state.persons.map((person,index)=>{
              return <Person
              name={person.name}
              age={person.age}
              />
            })}


<key is needed for lists>
 return <Person
              //add a key property so that when the dom and virutal dom are being compared
              //it knows to search by id difference so that it only changes the specific 
              //part of the dom and doesn't rerender the entire thing
              key={person.id}
              click={this.deletePersonHandler.bind(this,index)}
              name={person.name}
              age={person.age}
              />






#Basics of Styling:::
1) creating person.css, this is global therefore any component can use it, but more organized
2) must import to the component you want to use it in

or in line styling
1) const style={
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
    }

<button 
        style={style}


#styling dynamicallly::: single properties based on a condition
1) if(this.state.showPersons){
      // to change styles dynamically, place within the if statement somewhere, and then just change properties of the style const
      stytle.backgroundColor='red';


#styling dynamically: adding css classes based on conditions
1) create css classes that are global, eg in app.css <.red> <.bold>

2) create a classes string/array based on condition within render() 

let classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

3) add classename with .join to make it look like this
 <p className={classes.join(' ')}> this is really working </p>
 <p className={red bold}>



#adding pseudo selectors to inline css classes:::
eg button:hover={
  color:'black'
}

1)npm install --save radium
2) import Radium from 'radium';
3) export default Radium(App);
  note can add anywhere Radium(Person) just wrapping for more styles
  4) in inline styling add pseudo selector

    const style={
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'
        },
5) can change hover's styles dyanimcally like above
style[':hover']={
        backgroundColor:'lightred',
        color:'black'
      }

#media query::: a block of css code will only be applied to task if condition is met
first: summary on media queries) in a css class 

.Person{
    width:60%;
    margin:16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align:center;
}
/* @media (min-width:500px){
    .Person{
        width:450px;
    }
} */


1) import Radium, { StyleRoot } from "radium";
2) Wrap App.js's final render return  with <StyleRoot> </StyleRoot>
3) const style={
        '@media (min-width:500px)':{
            width:'450px'
        }
    }
4)    <div className="Person" style={style}>
    //   style will be appended to the css class based on @media condition



#css modules...