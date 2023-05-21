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
    <div>
    <h2 style={{color:"white"}}> Welcome To The Clasify Me Website</h2>
      <div className="head">
      <h4>university Available Globaly</h4>
      <button onClick={handleInput}>search</button>
      <input id='contInput' onChange={contry} type="text" />
    
      <h4>Number of universities available: {Output.length}</h4>
      <h5>We got you coverd</h5>
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
     </div>
    </>
  )
}

export default App
