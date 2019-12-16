// External import
import React from 'react';
// Internal import
import Header from './components/Header/Header';
import Routes from './Routes';


// CSS
import './App.css';

const user = {
  username: "CLS63"
}

function App() {
  return (
    <div className="App">
      <Header user={user}/>
      <Routes />
      
    </div>
  );
}

export default App;

