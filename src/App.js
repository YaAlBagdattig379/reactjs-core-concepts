import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      {/* singer */}
      <h1 className='allSingers'>all of famous singers of BD</h1>
      <Person name ="Hero Alam"song="badam badam"></Person>
      <Person name ="Andrew Kishore"song="amar Deho Tori"></Person>
      <Person name ="Asif Akbar"song="O priya priya"></Person>
      <Person name ="Pori Babu"song="hero alam fans"></Person>
      {/* player */}
      <Player cricketerNo1 ="sakib hasan"six="100"></Player>
    </div>
  );
}
// 1..to pass data into Component by 'Person'function name with props
function Person(props){
  // console.log(props)
 return (
   <div className="person">  
      <h2>song : {props.song}</h2>
      <p id='hello'>singer : {props.name}</p>
   </div>
  );
}

// 2..to pass data into Component by 'Player'function name with props
function Player(props){
  // console.log(props)
 return (
   <div className="person">  
      <h2>BD  cricketer no : 1 is :{props.cricketerNo1} </h2>
      <p id='hello'>total Six : {props.six}</p>
   </div>
  );
}
export default App;