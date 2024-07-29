import './App.css';
import { useState } from 'react';
import { useEffect, useMemo } from 'react';
import Header from './components/Header';
import useFetch from './components/useFetch';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000; i++) { }
    return num;
  };

  const calculation = useMemo (() => 
    expensiveCalculation(count)
  ,[count])

  return (
    <>
      <div className='App'>
        <Header />
        <button className='btn' onClick={() => setCount(count + 1)}>Increment</button>
        <h1 id='heading'>Count:{count}</h1>
        <input className='input' onChange={(e) => setName(e.target.value)} />
        <h1 id='heading'>Name: {name}</h1>
      </div>
    </>
  );
}

export default App;
