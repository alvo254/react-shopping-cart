//jsx java script synatax extension
//import React from 'react'; // using class
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  const name = "Alvo"
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello from Alvo</h1>
	  <h2>Hello {name}</h2>
    <Header />
    </div>
  );
}

// class App extends React.Component{         //using class sysntax
//   render(){
//     return <h1>Hello from class</h1>
//   }
// }

export default App;
