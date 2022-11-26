import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// Array of object 
const singers = [
  {name : "bappi lahiri",job:'singing',bankBalance: '1200'},
  {name : "manna dey",job:' older singing',bankBalance: '2200'},
  {name : "Boka Jamai",job:'singing',bankBalance: '33020'},
  {name : "vojon",job:'singing',bankBalance: '2100'}
]

function App() {
  // array 
  const nayoks = ['Hero Alam','Andrew kishore','Asif Akbar','Pori Babu']
  return (
    <div className="App">
      {
        singers.map(singer => <Person name={singer.name} job={singer.job} ></Person>) 
                                  //1. access from an array of object with direct component
      }
      {
        // nayoks.map(nayok => <Person name={nayok}></Person>) // 2. access from array 
                                                              // with direct component
      }
      {/* singer */}
      {/* <Person name ={nayoks[0]} song="badam badam"></Person> //3. access from an array
      <Person name ={nayoks[1]} song="amar Deho Tori"></Person>
      <Person name ={nayoks[2]} song="O priya priya"></Person>
      <Person name ={nayoks[3]} song="hero alam fans"></Person> */}
      {/* player */}
      <Player cricketerNo1 ="sakib hasan"six="120"></Player>
      <Player cricketerNo1 ="farhaz toni"six="100"></Player>
      <Player cricketerNo1 ="minu "six="80"></Player>
    </div>
  );
}

// 1..to pass data into Component by 'Person'function name with props
function Person(props){
  // console.log(props)
 return (
   <div className="person">  
      <h2>song : {props.job}</h2>
      <p id='hello'>singer : {props.name}</p>
   </div>
  );
}

// 2..to pass data into Component by 'Player'function name with props
function Player(props){
  // console.log(props)
 return (
   <div className="person">  
      <h2>BD cricketer is :{props.cricketerNo1} </h2>
      <p id='hello'>total Six : {props.six}</p>
   </div>
  );
}
export default App;