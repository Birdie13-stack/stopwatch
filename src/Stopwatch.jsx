import React, { useState } from 'react';
import './App.css';

function Stopwatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 10);
      }, 10);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setElapsedTime(0);
    setIntervalId(null);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor((time / 3600000) % 24);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <div className="watch">
        <h1>{formatTime(elapsedTime)}</h1>
      </div>

      <div className="controls">

      <button id="start" onClick={startTimer}>Start</button>
      <button id="stop" onClick={stopTimer}>Stop</button>
      <button id="reset" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
