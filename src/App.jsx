import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Output, setOutput] = useState([]);
  const[state, setState] = useState('');

  const handleInput = (e) =>{
e.preventDefault();
contry();
  }

  const contry = (e) =>{
setState(e.target.value)
  }

  const fetchData = async() => {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${state}`);
      const data = await response.json();
      setOutput(data)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData()
  }, [state])
  console.log(Output);

  return (
    <>
    
      <div className="head">
      <h4>university Searcher</h4>
      <button onClick={handleInput}>search</button>
      <input id='contInput' onChange={contry} type="text" />
    
      <h4>No of universities: {Output.length}</h4>
      </div>
     <div>
      {Output.map((e,index) => {
        <div key={index}>
          <p>{e.name}</p>
          <p>{e.web_pages}</p>
          <p>{e.country}</p>
        </div>
      })}
     </div>
    </>
  )
}

export default App
