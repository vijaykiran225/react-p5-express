import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import p5 from 'p5'
import Sketch from './Sketch';


function H1Comp() {

  const [serverData, setServerData] = useState({});

  const [counters, setCounters] = useState(1);
  const displayRef = useRef();
  useEffect(() => {
    // fetch("/api").then(x => x.json()).then(x => setServerData(x));

    const tp = new p5((p) => Sketch(p, counters), displayRef.current);

    return function cleanup() {
      tp.remove();
    };
  }, [counters])

  let chg = e => setCounters(counters + 10)

  console.log('navigator.getGamepads() :>> ', navigator.getGamepads());
  return (
    <div className="App">

      some crap in h1 {serverData.id} is {serverData.name}


      <button onClick={chg}> click </button>
      <div ref={displayRef}></div>
    </div >
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
