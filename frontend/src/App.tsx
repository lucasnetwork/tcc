import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const [logs,setLogs] = useState([])
  useEffect(()=>{
    axios.get("http://10.0.0.115:5005").then(response =>{
      console.log(response.data)
      setLogs(response.data)
    })
  },[])
  return (
    <div className="App">
      {logs.map(log => <p key={log._id}>{JSON.stringify(log)}</p>)}
    </div>
  )
}

export default App
