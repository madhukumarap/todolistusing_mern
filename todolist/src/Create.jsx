import { useState } from "react"
import axios from 'axios'
import "./App.css"
function Create() {
    const[task, setTask] = useState()
    const handleAdd = () =>{
        axios.post('http://localhost:3001/add',{task:task}) // sending the data to database
        .then(result => console.log(result)) // then after sending data
        .catch(err => console.log(err)) // if i get error the we make catch statement   
    }
  return (
    <div className="create_form ">
        <input type="text" onClick={(e) =>setTask(e.target.value)} placeholder="entre the task"/>
        <button onClick={handleAdd} type='button'>Add</button>
    </div>
  )
}

export default Create