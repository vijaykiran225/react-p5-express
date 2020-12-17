import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react'

function H1Comp() {

  const [serverData, setServerData] = useState({});

  useEffect(() => {
    fetch("/api").then(x => x.json()).then(x => setServerData(x));

  }, [])

  return (
    <div className="App">

      some crap in h1 {serverData.id} is {serverData.name}
    </div>
  );
}

function H2Comp() {
  return (
    <div className="App">

      some other crap in h2

    </div>
  );
}


function App() {
  return (
    <div className="App">


      <Route path="/h1" component={H1Comp}></Route>
      <Route path="/h2" component={H2Comp}></Route>

    </div>
  );
}

export default App;
