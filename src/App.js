import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h1>hero alam is a great actor in BD: <Person></Person></h1>
      
    </div>
  );
}
function Person(){
 return (
   <div className="person">  
      <h1>Famous Singer of Hero Alam </h1>
      <p id='hello'>Hero alam</p>
   </div>
  );
}

export default App;
