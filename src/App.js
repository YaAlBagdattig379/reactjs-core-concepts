import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name ="Hero Alam"song="badam badam"></Person>
      <Person name ="Andrew Kishore"song="amar Deho Tori"></Person>
      <Person name ="Asif Akbar"song="O priya priya"></Person>
      <Person name ="Pori Babu"song="hero alam fans"></Person>
    </div>
  );
}
function Person(props){
  console.log(props)
 return (
   <div className="person">  
      <h2>song : {props.song}</h2>
      <p id='hello'>singer : {props.name}</p>
   </div>
  );
}
export default App;