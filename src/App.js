import React, {useRef, useState} from 'react';
import './App.css';
import Range from './Components/Range'
import Header from './Components/Header';

function App() {
  let[seconds, setSeconds] = useState(0);
  let[shotsHit, setShotsHit] = useState(0);
  let[shotsFired, setShotsFired] = useState(0);

  const shoot = () => {
    if(seconds !== 0) {
      setShotsFired(++shotsFired);
    }
  }

  const shootTarget = () => {
    setShotsHit(++shotsHit);
  }

  const currentTimer = useRef();
  const startTimer = () => {
    setShotsFired(0);
    setShotsHit(0);
    setSeconds(seconds += 30);
    setSeconds(seconds--);
    currentTimer.current = setInterval(() => {
      if(seconds === 0) {
        clearInterval(currentTimer.current);
      }
      setSeconds(seconds--);
    }, 1000);
  }

  return (
    <div className="App">
      <Header seconds={seconds} shotsHit={shotsHit} shotsFired={shotsFired}/>
      <Range shoot={shoot} shootTarget={shootTarget} start={startTimer}/>
    </div>
  );
}

export default App;
